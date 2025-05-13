import { NextResponse } from 'next/server';
import { ListingsLatestData } from '@/types/listings';
import axios from 'axios';

let cachedData: ListingsLatestData | null = null;
const BUFFER_TIME: number = 30 * 1000; // extra 30 sec

export async function GET() {
  const now: number = Date.now();
  const nowDate: Date = new Date();

  const nextUpdate: number =
    new Date(
      nowDate.setMinutes(Math.ceil(nowDate.getMinutes() / 5) * 5, 0, 0)
    ).getTime() + BUFFER_TIME;

  if (cachedData && now < nextUpdate) {
    console.log('Returned from cache.');
    return NextResponse.json(cachedData);
  }

  const apiUrl =
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
  const apiKey = process.env.NEXT_COINMARKETCAP_API;

  if (!apiUrl || !apiKey) {
    console.error('API URL or API Key is missing');
    return NextResponse.json(
      { error: 'API URL or API Key is missing.' },
      { status: 500 }
    );
  }

  try {
    const response = await axios.get<ListingsLatestData>(apiUrl, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
        Accept: 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error('API request failed.');
    }

    const data = response.data;
    cachedData = data;
    console.log('New data was pulled from the API.');

    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Data could not be retrieved.' },
      { status: 500 }
    );
  }
}
