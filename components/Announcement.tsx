import React from 'react';
import { RiMegaphoneFill } from 'react-icons/ri';
import { Badge } from '@/components/ui/badge';
import { CgTrending, CgTrendingDown } from 'react-icons/cg';

const AnnouncementCard = () => {
  return (
    <div className='bg-[#121318] p-3 relative overflow-hidden'>
      <div className='container mx-auto w-full flex text-xs'>
        <span className='flex items-center gap-x-2'>
          Announcement
          <RiMegaphoneFill className='text-[#F0B90B]' size={14} />
        </span>
        <div className='px-3 flex'>
          <div className='flex items-center gap-x-4'>
            <Badge className='bg-[#181920]'>
              BTC +2.88%
              <div>
                <CgTrending />
              </div>
            </Badge>
            <Badge className='bg-[#181920]'>
              BNB +4.08%
              <div>
                <CgTrending />
              </div>
            </Badge>
            <Badge className='bg-[#181920]'>
              DOGE +5.88%
              <div>
                <CgTrending />
              </div>
            </Badge>
            <Badge className='bg-[#181920]'>
              SHIB +4.18%
              <div>
                <CgTrending />
              </div>
            </Badge>
            <Badge className='bg-[#181920]'>
              XRP -8.25%
              <div>
                <CgTrendingDown />
              </div>
            </Badge>
            <Badge className='bg-[#181920]'>
              TOKEN +10.81%
              <div>
                <CgTrending />
              </div>
            </Badge>
            <Badge className='bg-[#181920]'>
              FLOKI +18.88%
              <div>
                <CgTrending />
              </div>
            </Badge>
            <Badge className='bg-[#181920]'>
              APT +2.81%
              <div>
                <CgTrending />
              </div>
            </Badge>
            <Badge className='bg-[#181920]'>
              XAI +3.11%
              <div>
                <CgTrendingDown />
              </div>
            </Badge>
            <Badge className='bg-[#181920]'>
              BONE +1.33%
              <div>
                <CgTrending />
              </div>
            </Badge>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full'></div>
    </div>
  );
};

export default AnnouncementCard;
