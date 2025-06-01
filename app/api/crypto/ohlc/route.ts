import { NextRequest, NextResponse } from 'next/server';
import { mongoDB } from '@/lib/db2';
import axios from 'axios';
import { OHLCModel } from '@/models/OHLCModel';
import { OhlcApiResponse, Ohlc } from '@/types/ohlc';
import { UserRole } from '@prisma/client';
import { auth } from '@/auth';

const COINS = ['bitcoin', 'ethereum', 'binancecoin'];
const VS_CURRENCY = 'usd';
const DATA_LIMIT_PER_COIN = 2190; // 1 year

let lastUpdatedAt = 0;

export async function GET(req: NextRequest) {
  const session = await auth();
  const now = new Date();
  const currentHour = now.getUTCHours(); // UTC Hours

  const authHeader = req.headers.get('Authorization');
  const isCronJob = authHeader === `Bearer ${process.env.NEXT_CRONJOB_SECRET}`;

  if (!isCronJob) {
    if (session?.user.role !== UserRole.ADMIN) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
  }

  const isValidUpdateTime = currentHour % 4 === 0 && now.getUTCMinutes() < 10; // Extra 10 minute

  if (!isValidUpdateTime) {
    const nextHour = 4 * (Math.floor(currentHour / 4) + 1);
    const nextUpdate = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        nextHour,
        0,
        0
      )
    );

    const msUntilNext = nextUpdate.getTime() - now.getTime();

    return NextResponse.json(
      {
        message: 'Data can be pulled every 4 hours.',
        nextValidTimeUTC: nextUpdate.toISOString(),
        nextUpdateInMinutes: Math.ceil(msUntilNext / 60000),
      },
      { status: 429 }
    );
  }

  const nowTimestamp = Date.now();

  if (nowTimestamp - lastUpdatedAt < 4 * 60 * 60 * 1000) {
    return NextResponse.json(
      {
        message: "It hasn't been 4 hours since the last update.",
        nextUpdateInMinutes: Math.ceil(
          (4 * 60 * 60 * 1000 - (nowTimestamp - lastUpdatedAt)) / 60000
        ),
      },
      { status: 429 }
    );
  }

  await mongoDB();

  try {
    for (const coinId of COINS) {
      const response = await axios.get<OhlcApiResponse>(
        `https://api.coingecko.com/api/v3/coins/${coinId}/ohlc`,
        {
          params: { vs_currency: VS_CURRENCY, days: '30' },
          headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': process.env.NEXT_COINGECKO_API,
          },
        }
      );

      const ohlcData = response.data;

      if (!Array.isArray(ohlcData) || ohlcData.length === 0) {
        console.warn(`No data found: ${coinId}`);
        continue;
      }

      const latest: Ohlc = ohlcData[ohlcData.length - 1];
      const [timestamp, open, high, low, close] = latest;

      const existing = await OHLCModel.findOne({ coinId, timestamp });

      if (!existing) {
        await OHLCModel.create({ coinId, timestamp, open, high, low, close });

        const count = await OHLCModel.countDocuments({ coinId });

        if (count > DATA_LIMIT_PER_COIN) {
          const excess = count - DATA_LIMIT_PER_COIN;
          const oldRecords = await OHLCModel.find({ coinId })
            .sort({ timestamp: 1 })
            .limit(excess)
            .select('_id');
          const idsToDelete = oldRecords.map((doc) => doc._id);
          await OHLCModel.deleteMany({ _id: { $in: idsToDelete } });
        }
      }

      // use if coins exceed 30
      // await new Promise((res) => setTimeout(res, 5000));
    }

    lastUpdatedAt = nowTimestamp;

    return NextResponse.json({ message: 'Data updated successfully.' });
  } catch (error) {
    console.error('Hata:', error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
