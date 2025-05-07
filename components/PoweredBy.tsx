import React from 'react';
import Image from 'next/image';

const PoweredBy = () => {
  return (
    <>
      <Image
        className='w-[300px] h-auto object-contain'
        draggable={false}
        src={'/images/powered-by-coingecko.png'}
        alt={'powered by coingecko'}
        width={1707}
        height={465}
      />
    </>
  );
};

export default PoweredBy;
