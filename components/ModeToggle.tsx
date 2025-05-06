'use client';

import * as React from 'react';
import { Moon, SunDim } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className='flex items-center justify-center'>
      {theme === 'light' ? (
        <>
          <Moon
            size={40}
            onClick={() => setTheme('dark')}
            className='hover:bg-gray-100 text-[#121318] dark:text-[#eaecef] rounded-full md:block hidden cursor-pointer hover:text-[#121318] dark:hover:text-white p-2 scale-100 transition-all dark:scale-0'
          />
        </>
      ) : (
        <>
          <SunDim
            size={40}
            onClick={() => setTheme('light')}
            className='hover:bg-[#121318] text-[#121318] dark:text-[#eaecef] rounded-full md:block hidden cursor-pointer hover:text-white p-2 scale-0 transition-all dark:scale-100'
          />
        </>
      )}
    </div>
  );
}
