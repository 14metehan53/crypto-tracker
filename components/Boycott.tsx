'use client';
import React from 'react';
import { AiOutlineAlert } from 'react-icons/ai';
import { Badge } from '@/components/ui/badge';
import { boycottList } from '@/constants/boycott';

const Boycott = () => {
  return (
    <div className='container mx-auto mt-10 px-4'>
      <h1 className='text-2xl font-semibold dark:text-white text-[#121318] mb-6 text-center flex items-center justify-center gap-x-2'>
        <AiOutlineAlert className='text-red-500' /> Boycotted Coins
      </h1>

      <div className='overflow-x-auto'>
        <table className='min-w-full dark:bg-[#111216] bg-gray-100 dark:text-white text-[#121318] rounded-xl overflow-hidden text-sm'>
          <thead>
            <tr className='text-left border-b dark:border-gray-700 border-[#000]/10'>
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
                className='dark:hover:bg-[#1a1c20] hover:bg-gray-200 border-b dark:border-gray-800 border-[#000]/10 transition'
              >
                <td className='p-4'>{index + 1}</td>
                <td className='p-4'>
                  <span className='font-medium flex items-center'>
                    {list.name}
                  </span>
                </td>
                <td className='p-4'>
                  <Badge className='dark:bg-[#c17aff31] bg-purple-400 dark:text-purple-400 text-purple-600 rounded-full px-3 py-1'>
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
