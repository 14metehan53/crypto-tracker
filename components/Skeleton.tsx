import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonCard = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className='dark:bg-[#0d0e11] bg-gray-400/10 p-3 rounded-lg mt-3 flex items-center justify-between'
        >
          <Skeleton className='h-8.5 w-full rounded bg-gray-400/10 dark:bg-[#0d0e11]' />
        </div>
      ))}
    </>
  );
};

export default SkeletonCard;
