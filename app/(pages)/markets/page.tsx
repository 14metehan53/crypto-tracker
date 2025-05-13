'use client';
import React, { useEffect, useState } from 'react';
import { ListingsLatestData } from '@/types/listings';
import { InfoBox } from '@/components/InfoBox';
import axios from 'axios';
import { formatVolume } from '@/action/formatVolume';

const Markets = () => {
  const [cryptoList, setCryptoList] = useState<ListingsLatestData[]>([]);

  const fetchData = async (): Promise<void> => {
    const response = await axios.get<{ data: ListingsLatestData[] }>(
      '/api/crypto/listings/latest'
    );
    setCryptoList(response.data.data);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000); // 30 second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container mx-auto mt-10 px-4 mb-10'>
      <div className='flex items-center justify-center mb-10'>
        <InfoBox
          message={
            'To optimize the API, only 100 coins are currently listed, but all will be supported very soon.'
          }
        />
      </div>
      <h1 className='text-2xl font-semibold dark:text-white text-[#121318] mb-6'>
        Markets
      </h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full dark:bg-[#111216] bg-gray-400/10 dark:text-white text-[#121318] rounded-xl overflow-hidden'>
          <thead>
            <tr className='text-left border-b dark:border-gray-700 border-[#000]/10 text-sm'>
              <th className='p-4'>#</th>
              <th className='p-4'>Name</th>
              <th className='p-4'>Price</th>
              <th className='p-4'>24h Volume</th>
              <th className='p-4'>Market Cap</th>
              <th className='p-4'>Change (24h)</th>
            </tr>
          </thead>
          <tbody>
            {cryptoList?.map((coin) => (
              <tr
                key={coin.symbol}
                className='dark:hover:bg-[#1a1c20] hover:bg-gray-200 border-b dark:border-gray-800 border-[#000]/10 transition'
              >
                <td className='p-4'>{coin.cmc_rank}</td>
                <td className='p-4 flex items-center gap-2'>
                  <span className='font-medium'>{coin.name}</span>
                  <span className='text-gray-400 text-xs'>({coin.symbol})</span>
                </td>
                <td className='p-4 text-sm md:text-base'>
                  {coin.quote.USD.price < 0.001
                    ? `$ ${String(coin.quote.USD.price.toFixed(8))}`
                    : `$ ${coin.quote.USD.price.toLocaleString()}`}
                </td>
                <td className='p-4'>
                  $ {formatVolume(coin.quote.USD.volume_24h)}
                </td>
                <td className='p-4'>{coin.quote.USD.market_cap}</td>
                <td
                  className={`p-4 ${
                    coin.quote.USD.percent_change_24h >= 0
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}
                >
                  {coin.quote.USD.percent_change_24h >= 0 ? '+' : ''}
                  {coin.quote.USD.percent_change_24h.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Markets;
