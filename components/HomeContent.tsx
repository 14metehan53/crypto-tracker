import React from 'react';
import { AiFillTrophy } from 'react-icons/ai';
import { RiBarChartGroupedFill } from 'react-icons/ri';
import { CgTrending } from 'react-icons/cg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const HomeContent = () => {
  return (
    <>
      <div className='container md:place-items-center grid lg:grid-cols-2 mt-20 md:grid-cols-1 w-full mx-auto gap-x-10'>
        <div className='bg-[#0d0e118c] p-4 h-96 rounded-xl lg:ml-10 w-full max-w-[550px] md:ml-0'>
          <div className='bg-[#121318] border-[#090909] border p-4 h-96 rounded-xl -mt-8 w-full'>
            <div className='flex items-center text-xl justify-center'>
              <div className='bg-[#0f1013] flex items-center gap-1 p-2 px-3 rounded-full'>
                Popular Coin's
                <AiFillTrophy size={20} className='text-[#F0B90B]' />
              </div>
            </div>
            <div className='mt-5 w-full max-w-[500px] mx-auto'>
              <div className='bg-[#0d0e11] p-3 rounded-lg mt-3 flex items-center justify-between'>
                <div>BTC</div>
                <div className='text-md text-green-400'>132.592,18 $</div>
                <div className='flex items-center gap-2 text-xs'>
                  248.000.000 USDT
                  <div className='flex items-center gap-x-2 border border-slate-400/10 p-1 px-2 rounded-full'>
                    24h vol
                    <RiBarChartGroupedFill />
                  </div>
                </div>
                <Badge className='text-green-500 bg-[#00c95069] p-1 rounded-md text-md'>
                  +2.88%
                </Badge>
              </div>
              <div className='bg-[#0d0e11] p-3 rounded-lg mt-3 flex items-center justify-between'>
                <div>BNB</div>
                <div className='text-md text-red-500'>3.218,26 $</div>
                <div className='flex items-center gap-2 text-xs'>
                  25.000.000 USDT
                  <div className='flex items-center gap-x-2 border border-slate-400/10 p-1 px-2 rounded-full'>
                    24h vol
                    <RiBarChartGroupedFill />
                  </div>
                </div>
                <Badge className='text-green-500 bg-[#00c95069] p-1 rounded-md text-md'>
                  +4.08%
                </Badge>
              </div>
              <div className='bg-[#0d0e11] p-3 rounded-lg mt-3 flex items-center justify-between'>
                <div>DOGE</div>
                <div className='text-md text-red-500'>4.82,74 $</div>
                <div className='flex items-center gap-2 text-xs'>
                  38.000.000 USDT
                  <div className='flex items-center gap-x-2 border border-slate-400/10 p-1 px-2 rounded-full'>
                    24h vol
                    <RiBarChartGroupedFill />
                  </div>
                </div>
                <Badge className='text-green-500 bg-[#00c95069] p-1 rounded-md text-md'>
                  +5.88%
                </Badge>
              </div>
              <div className='bg-[#0d0e11] p-3 rounded-lg mt-3 flex items-center justify-between'>
                <div>SHIB</div>
                <div className='text-md text-green-500'>0.0001182 $</div>
                <div className='flex items-center gap-2 text-xs'>
                  32.000.000 USDT
                  <div className='flex items-center gap-x-2 border border-slate-400/10 p-1 px-2 rounded-full'>
                    24h vol
                    <RiBarChartGroupedFill />
                  </div>
                </div>
                <Badge className='text-green-500 bg-[#00c95069] p-1 rounded-md text-md'>
                  +4.18%
                </Badge>
              </div>
              <span className='text-xs text-gray-400 flex items-center h-9 justify-center'>
                The data is updated at regular intervals.
              </span>
            </div>
          </div>
        </div>

        {/* Sağdaki içerik */}
        <div className='lg:max-w-xl md:w-auto md:text-md p-4 h-96 flex items-center justify-center text-center'>
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
                className='cursor-pointer font-bold bg-[#F0B90B] hover:bg-[#daaa0f] mt-8 rounded-full'
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
