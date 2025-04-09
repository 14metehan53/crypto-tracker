import React from 'react';
import { Badge } from '@/components/ui/badge';
import { AiOutlineAlert } from 'react-icons/ai';
import { boycottList } from '@/constants/boycott';

const Boycott = () => {
  return (
    <>
      <div className='container mx-auto mt-10 border border-[#0909096b] bg-[#121318] p-5 w-[600px] text-center rounded-md'>
        {boycottList?.map((list) => (
          <div key={list.id}>
            <div className='flex items-center justify-center gap-x-1'>
              Coin : {list.name}
              <AiOutlineAlert size={20} className='text-red-500' />
            </div>
            <div className='flex items-center justify-center gap-x-2'>
              Rank:
              <Badge className='p-2 rounded-full bg-[#c17aff31] text-purple-500'>
                #{list.rank}
              </Badge>
            </div>
          </div>
        ))}
        <Badge className='p-1 px-2 rounded-md text-red-500 bg-[#fb2c364f] mt-3'>
          You know why #Boycott
        </Badge>
      </div>
      <div className='text-7xl select-none flex items-center justify-center text-[#121318]'>
        ...
      </div>
    </>
  );
};

export default Boycott;
