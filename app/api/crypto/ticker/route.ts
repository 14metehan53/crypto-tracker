import { NextResponse } from 'next/server';
import { CryptoData } from '@/types/ticker';

let cachedData: CryptoData[] | null = null;
const BUFFER_TIME: number = 30 * 1000; // extra 30 sec

export async function GET() {
  const now: number = Date.now();
  const nowDate: Date = new Date();

  const nextUpdate: number =
    new Date(
      nowDate.setMinutes(Math.ceil(nowDate.getMinutes() / 5) * 5, 0, 0)
    ).getTime() + BUFFER_TIME;

  if (cachedData && now < nextUpdate) {
    console.log('returned from cache.');
    return NextResponse.json(cachedData);
  }

  const apiUrl: string = process.env.TICKER
    ? `${process.env.TICKER}?limit=4`
    : 'https://api.alternative.me/v1/ticker/?limit=4';

  try {
    const response: Response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('API request failed.');
    }

    const data: CryptoData[] = await response.json();

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
