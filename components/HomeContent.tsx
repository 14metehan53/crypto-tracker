'use client';
import React, { useEffect, useState } from 'react';
import { AiFillFire } from 'react-icons/ai';
import {
  RiBarChartGroupedFill,
  RiArrowDropUpFill,
  RiArrowDropDownFill,
} from 'react-icons/ri';
import { CgTrending } from 'react-icons/cg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import AnnouncementCard from '@/components/Announcement';
import PoweredBy from '@/components/PoweredBy';
import axios from 'axios';
import { formatVolume } from '@/action/formatVolume';
import { formatPrice } from '@/action/formatPrice';
import { CryptoData } from '@/types/ticker';
import SkeletonCard from '@/components/Skeleton';
import { percentChange } from '@/action/change';
import { priceChange } from '@/action/priceChange';

const HomeContent = () => {
  const [popularCoins, setPopularCoins] = useState<CryptoData[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await axios.get<CryptoData[]>('/api/crypto/ticker');
      setPopularCoins(response.data);
      setLoading(false);

      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      setLastUpdated(formattedTime);
    } catch (error) {
      console.log('something went wrong!', error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000); // 30 second
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnnouncementCard />
      <div className='container md:place-items-center grid lg:grid-cols-2 mt-15 sm:mt-20 sm:justify-center md:grid-cols-1 w-full mx-auto gap-x-10'>
        <div className='dark:bg-[#0d0e118c] bg-gray-400/10 p-4 h-90 sm:h-96 rounded-xl mx-auto lg:ml-10 w-full max-w-[500px] md:max-w-[600px]'>
          <div className='dark:bg-[#121318] bg-white dark:border-[#090909] border p-4 h-90 sm:h-96 rounded-xl -mt-8 w-full'>
            <div className='relative flex items-center justify-center'>
              <div className='flex items-center text-xl justify-center'>
                <div className='dark:bg-[#0f1013] bg-gray-400/10 text-base sm:text-lg flex items-center gap-1 p-2 px-3 rounded-full'>
                  Popular Coins
                  <AiFillFire size={20} className='text-[#ffc400]' />
                </div>
                <div className='absolute right-0 top-1/2 transform -translate-y-1/2 text-[10px] sm:text-xs border dark:bg-[#0f1013] bg-gray-400/10 p-1.5 rounded-full border-none'>
                  <Link
                    target='_blank'
                    href={'https://alternative.me'}
                    className='dark:text-white text-[#121318] cursor-pointer'
                  >
                    Alternative.me
                  </Link>
                </div>
              </div>
            </div>
            <div className='mt-5 w-full sm:max-w-[450px] md:max-w-[500px] mx-auto'>
              {loading ? (
                <SkeletonCard />
              ) : (
                <>
                  {popularCoins?.map((coin) => (
                    <div
                      key={coin.id}
                      className='dark:bg-[#0d0e11] bg-gray-400/10 text-xs md:text-lg p-3 rounded-lg mt-3 flex items-center justify-between'
                    >
                      <div>{coin.symbol}</div>
                      <div
                        className={`${priceChange(
                          coin.percent_change_24h
                        )} flex items-center`}
                      >
                        {Number(coin.percent_change_24h) >= 0.005 ? (
                          <RiArrowDropUpFill size={20} />
                        ) : (
                          <RiArrowDropDownFill size={20} />
                        )}
                        <div>{formatPrice(coin.price_usd)} $</div>
                      </div>
                      <div className='flex items-center gap-2 text-xs'>
                        {formatVolume(Number(coin['24h_volume_usd']))} USD
                        <div className='hidden md:flex items-center gap-x-2 border dark:border-slate-400/10 p-1.5 rounded-md'>
                          24h vol
                          <RiBarChartGroupedFill />
                        </div>
                      </div>
                      {Number(coin.percent_change_24h) >= 0.005 ? (
                        <Badge
                          className={`${percentChange(
                            coin.percent_change_24h
                          )} p-1 rounded-md text-xs sm:text-base`}
                        >
                          {Number(coin.percent_change_24h) >= 0.005 ? '+' : ''}
                          {Number(coin.percent_change_24h).toFixed(2)}%
                        </Badge>
                      ) : (
                        <Badge
                          className={`${percentChange(
                            coin.percent_change_24h
                          )} p-1 rounded-md text-xs sm:text-base`}
                        >
                          {Number(coin.percent_change_24h).toFixed(2)}%
                        </Badge>
                      )}
                    </div>
                  ))}
                  <span className='text-xs dark:text-gray-400 text-[#121318] flex items-center h-9 justify-center'>
                    The data is updated at{' '}
                    {lastUpdated ? `${lastUpdated}` : 'regular intervals.'}.
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Sağdaki içerik */}
        <div className='lg:max-w-xl md:w-auto text-base mt-15 sm:mt-0 p-4 h-96 flex items-center justify-center text-center'>
          <div>
            <div className='text-lg md:text-2xl mt-3 mb-5 flex items-center justify-center gap-x-3'>
              Coingecko & Coinmarketcap API
              <CgTrending />
            </div>
            <div className='gap-y-6 grid'>
              <div>
                This platform has been developed with the goal of making
                cryptocurrency markets more transparent and accessible.
                Integrated with the Coingecko and Coinmarketcap API, it delivers
                real time data on major cryptocurrencies such as Bitcoin, Doge,
                and BNB — including their current prices, 24 hour trading
                volume, and liquidity statistics.
              </div>
              <div>
                It offers a clean yet powerful interface designed for users who
                want to dive deeper into market analysis. Supported by up to
                date data, the system helps investors make smarter decisions and
                detect potential trends at an earlier stage.
              </div>
            </div>
            <div className='flex justify-center'>
              <Button
                className='cursor-pointer font-bold dark:text-[#121318] bg-[#ffc400] dark:bg-[#ffc400f1] hover:bg-[#f0b000da] dark:hover:bg-[#daaa0f] mb-10 sm:mb-0 mt-8 rounded-full'
                variant={'secondary'}
              >
                <Link href={'/markets'}>Markets</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* powered by */}
      <div className='container mx-auto mt-15'>
        <div className='text-center text-[#121318] dark:text-white'>
          Powered by
        </div>
        <div className='py-4 items-center justify-self-center'>
          <PoweredBy />
        </div>
      </div>
    </>
  );
};

export default HomeContent;
