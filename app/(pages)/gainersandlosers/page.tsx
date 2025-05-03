'use client';
import React, { useEffect, useState } from 'react';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import Link from 'next/link';

const GainersAndLosers = () => {
  const initialTime = {
    days: 99,
    hours: 12,
    minutes: 45,
    seconds: 10,
  };

  const toSeconds = (time: typeof initialTime) => {
    return (
      time.days * 86400 + time.hours * 3600 + time.minutes * 60 + time.seconds
    );
  };

  const [remainingSeconds, setRemainingSeconds] = useState(
    toSeconds(initialTime)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(remainingSeconds);

  const TimeCard = ({ value, label }: { value: number; label: string }) => (
    <div className='dark:bg-[#1c1d22] bg-gray-100 rounded-xl px-6 py-5 text-center shadow-lg border dark:border-[#2e2f35] border-[#000]/10'>
      <div className='text-3xl font-bold'>{String(value).padStart(2, '0')}</div>
      <div className='text-sm dark:text-gray-400 text-[#121318] mt-1'>
        {label}
      </div>
    </div>
  );

  return (
    <div className='container mx-auto min-h-[calc(100vh-72px)] flex items-center justify-center'>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='dark:text-white text-[#121318] text-xl flex items-center gap-x-2 font-semibold tracking-wide'>
          <MdOutlineAccessTimeFilled size={22} /> Remaining time
        </h1>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 dark:text-white text-[#121318]'>
          <TimeCard value={days} label='Days' />
          <TimeCard value={hours} label='Hours' />
          <TimeCard value={minutes} label='Minutes' />
          <TimeCard value={seconds} label='Seconds' />
        </div>
        <div className='text-xs'>only registered users can see</div>
        <div className='flex gap-x-3'>
          <Link
            className='text-xs text-yellow-500 hover:underline underline-offset-2'
            href={'/auth/signin'}
          >
            sign in
          </Link>
          <Link
            className='text-xs text-yellow-500 hover:underline underline-offset-2'
            href={'/auth/signup'}
          >
            sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GainersAndLosers;
