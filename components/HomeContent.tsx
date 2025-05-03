import React from 'react';
import { AiFillFire } from 'react-icons/ai';
import { RiBarChartGroupedFill } from 'react-icons/ri';
import { CgTrending } from 'react-icons/cg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import AnnouncementCard from '@/components/Announcement';

const HomeContent = () => {
  return (
    <>
      <AnnouncementCard />
      <div className='container md:place-items-center grid lg:grid-cols-2 mt-15 sm:mt-20 sm:justify-center md:grid-cols-1 w-full mx-auto gap-x-10'>
        <div className='dark:bg-[#0d0e118c] bg-gray-400/10 p-4 h-90 sm:h-96 rounded-xl mx-auto lg:ml-10 w-full max-w-[500px] md:max-w-[600px]'>
          <div className='dark:bg-[#121318] bg-white dark:border-[#090909] border p-4 h-90 sm:h-96 rounded-xl -mt-8 w-full'>
            <div className='flex items-center text-xl justify-center'>
              <div className='dark:bg-[#0f1013] bg-gray-400/10 text-base sm:text-lg flex items-center gap-1 p-2 px-3 rounded-full'>
                Popular Coins
                <AiFillFire size={20} className='text-[#ffc400]' />
              </div>
            </div>
            <div className='mt-5 w-full sm:max-w-[450px] md:max-w-[500px] mx-auto'>
              <div className='dark:bg-[#0d0e11] bg-gray-400/10 text-xs md:text-lg p-3 rounded-lg mt-3 flex items-center justify-between'>
                <div>BTC</div>
                <div className='text-green-400'>132.592,18 $</div>
                <div className='flex items-center gap-2 text-xs'>
                  16.8B USDT
                  <div className='hidden md:flex items-center gap-x-2 border dark:border-slate-400/10 p-1 px-2 rounded-full'>
                    24h vol
                    <RiBarChartGroupedFill />
                  </div>
                </div>
                <Badge className='dark:text-green-500 text-[#0c9945] dark:bg-[#00c95069] bg-[#00c950c5] p-1 rounded-md text-xs sm:text-base'>
                  +2.88%
                </Badge>
              </div>
              <div className='dark:bg-[#0d0e11] bg-gray-400/10 text-xs md:text-lg p-3 rounded-lg mt-3 flex items-center justify-between'>
                <div>BNB</div>
                <div className='text-red-500'>3.218,26 $</div>
                <div className='flex items-center gap-2 text-xs'>
                  4.22B USDT
                  <div className='hidden md:flex items-center gap-x-2 border dark:border-slate-400/10 p-1 px-2 rounded-full'>
                    24h vol
                    <RiBarChartGroupedFill />
                  </div>
                </div>
                <Badge className='dark:text-green-500 text-[#0c9945] dark:bg-[#00c95069] bg-[#00c950c5] p-1 rounded-md text-xs sm:text-base'>
                  +4.08%
                </Badge>
              </div>
              <div className='dark:bg-[#0d0e11] bg-gray-400/10 text-xs md:text-lg p-3 rounded-lg mt-3 flex items-center justify-between'>
                <div>DOGE</div>
                <div className='text-red-500'>4.82,74 $</div>
                <div className='flex items-center gap-2 text-xs'>
                  1.79B USDT
                  <div className='hidden md:flex items-center gap-x-2 border dark:border-slate-400/10 p-1 px-2 rounded-full'>
                    24h vol
                    <RiBarChartGroupedFill />
                  </div>
                </div>
                <Badge className='dark:text-green-500 text-[#0c9945] dark:bg-[#00c95069] bg-[#00c950c5] p-1 rounded-md text-xs sm:text-base'>
                  +5.88%
                </Badge>
              </div>
              <div className='dark:bg-[#0d0e11] bg-gray-400/10 text-xs md:text-lg p-3 rounded-lg mt-3 flex items-center justify-between'>
                <div>SHIB</div>
                <div className='text-green-500'>0.0001182 $</div>
                <div className='flex items-center gap-2 text-xs'>
                  1.22B USDT
                  <div className='hidden md:flex items-center gap-x-2 border dark:border-slate-400/10 p-1 px-2 rounded-full'>
                    24h vol
                    <RiBarChartGroupedFill />
                  </div>
                </div>
                <Badge className='dark:text-green-500 text-[#0c9945] dark:bg-[#00c95069] bg-[#00c950c5] p-1 rounded-md text-xs sm:text-base'>
                  +4.18%
                </Badge>
              </div>
              <span className='text-xs dark:text-gray-400 text-[#121318] flex items-center h-10 justify-center'>
                The data is updated at regular intervals.
              </span>
            </div>
          </div>
        </div>

        {/* Sağdaki içerik */}
        <div className='lg:max-w-xl md:w-auto text-base mt-15 sm:mt-0 p-4 h-96 flex items-center justify-center text-center'>
          <div>
            <div className='text-2xl mb-5 flex items-center justify-center gap-x-3'>
              Coinmarketcap API
              <CgTrending />
            </div>
            <div className='gap-y-6 grid'>
              <div>
                This platform has been developed with the goal of making
                cryptocurrency markets more transparent and accessible.
                Integrated with the CoinMarketCap API, it delivers real-time
                data on major cryptocurrencies such as Bitcoin, Doge, and BNB —
                including their current prices, 24-hour trading volume, and
                liquidity statistics.
              </div>
              <div>
                It offers a clean yet powerful interface designed for users who
                want to dive deeper into market analysis. Supported by
                up-to-date data, the system helps investors make smarter
                decisions and detect potential trends at an earlier stage.
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
    </>
  );
};

export default HomeContent;
