'use client';
import React, { useEffect, useState } from 'react';
import { ListingsLatestData } from '@/types/listings';
import { InfoBox } from '@/components/InfoBox';
import axios from 'axios';
import { FaShareFromSquare } from 'react-icons/fa6';
import { SiCoinmarketcap } from 'react-icons/si';
import MarketTable from '@/components/MarketTable';
import Link from 'next/link';

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
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-xl font-semibold dark:text-white text-[#121318]'>
          Markets
        </h1>
        <div className='text-xs mr-2 p-2 border text-blue-600 border-blue-600/30 rounded-full flex items-center justify-center gap-x-2'>
          <SiCoinmarketcap />
          <span>Powered by Coinmarketcap</span>
          <Link target='_blank' href={'https://coinmarketcap.com/api'}>
            <FaShareFromSquare className='hover:text-blue-500 cursor-pointer' />
          </Link>
        </div>
      </div>
      <MarketTable cryptoList={cryptoList} />
    </div>
  );
};

export default Markets;
