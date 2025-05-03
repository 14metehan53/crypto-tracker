'use client';
import React, { useEffect, useState } from 'react';
import { RiMegaphoneFill } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import { CgTrending } from 'react-icons/cg';

const announcements = [
  {
    text: 'Bitcoin surged 2.3% after a major institutional investment.',
    icon: <CgTrending />,
  },
  {
    text: 'BNB rallied after Binance announced a new Launchpad project.',
  },
  {
    text: 'Solana surpassed Ethereum in NFT trading volume.',
  },
  {
    text: 'Ripple scored another legal win in its case against the SEC.',
  },
  {
    text: 'Cardano gains attention with its new education project in Africa.',
  },
  {
    text: 'Dogecoin spiked 8% after a tweet from Elon Musk.',
    icon: <CgTrending />,
  },
];

const AnnouncementCard = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='dark:bg-[#121318] bg-[#ffc400] p-3 relative overflow-hidden'>
      <div className='w-full flex text-xs'>
        <span className='flex items-center gap-x-2'>
          Announcement
          <RiMegaphoneFill
            className='dark:text-[#F0B90B] text-[#121318]'
            size={14}
          />
        </span>
        <div className='px-3'>
          <div className='flex items-center sm:gap-x-4 h-5'>
            <AnimatePresence>
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0.5 }}
                className='absolute flex gap-x-2 items-center'
              >
                {announcements[index].text}
                <span className='hidden sm:flex'>
                  {announcements[index].icon}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full'></div>
    </div>
  );
};

export default AnnouncementCard;
