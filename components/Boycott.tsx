'use client';
import React from 'react';
import { AiOutlineAlert } from 'react-icons/ai';
import { Badge } from '@/components/ui/badge';
import { boycottList } from '@/constants/boycott';

const Boycott = () => {
  return (
    <div className='container mx-auto mt-10 px-4'>
      <h1 className='text-2xl font-semibold text-white mb-6 text-center flex items-center justify-center gap-x-2'>
        <AiOutlineAlert className='text-red-500' /> Boycotted Coins
      </h1>

      <div className='overflow-x-auto'>
        <table className='min-w-full bg-[#111216] text-white rounded-xl overflow-hidden text-sm'>
          <thead>
            <tr className='text-left border-b border-gray-700'>
              <th className='p-4'>#</th>
              <th className='p-4'>Coin</th>
              <th className='p-4'>Rank</th>
              <th className='p-4'>Reason</th>
            </tr>
          </thead>
          <tbody>
            {boycottList?.map((list, index) => (
              <tr
                key={list.id}
                className='hover:bg-[#1a1c20] border-b border-gray-800 transition'
              >
                <td className='p-4'>{index + 1}</td>
                <td className='p-4 flex items-center gap-2'>
                  <span className='font-medium'>{list.name}</span>
                </td>
                <td className='p-4'>
                  <Badge className='bg-[#c17aff31] text-purple-400 rounded-full px-3 py-1'>
                    #{list.rank}
                  </Badge>
                </td>
                <td className='p-4 text-red-400 italic'>
                  {list.reason ?? 'You know why.'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Boycott;
