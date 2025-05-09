'use client';
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { headerMenuLinks } from '@/constants/links';
import { useRouter } from 'next/navigation';
import { FiMenu } from 'react-icons/fi';
import { HiOutlineX } from 'react-icons/hi';
import { Badge } from '@/components/ui/badge';
import { GoDotFill } from 'react-icons/go';
import { Moon, SunDim } from 'lucide-react';
import { useTheme } from 'next-themes';

const HomeMenu = () => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu open={isClicked} onOpenChange={setIsClicked}>
      <DropdownMenuTrigger className='outline-none'>
        {isClicked ? (
          <HiOutlineX className='cursor-pointer block lg:hidden' size={30} />
        ) : (
          <FiMenu className='cursor-pointer block lg:hidden' size={30} />
        )}
        <DropdownMenuContent className='mt-2 dark:bg-[#121318] dark:text-white dark:border-gray-400/10 border-[#000]/10'>
          {headerMenuLinks?.map((menu, index) => {
            return (
              <DropdownMenuItem
                key={index}
                className='cursor-pointer lg:hidden block'
                onClick={() => router.push(menu.href)}
              >
                <span className='flex items-center gap-x-1'>
                  {menu.menuIcon && (
                    <menu.menuIcon className='dark:text-white text-[#121318]' />
                  )}
                  {menu.name}
                  {menu.icon && <menu.icon className='text-[#f6465d]' />}
                </span>
              </DropdownMenuItem>
            );
          })}
          {theme && theme === 'light' ? (
            <>
              <DropdownMenuItem
                onClick={() => setTheme('dark')}
                className='md:hidden flex items-center cursor-pointer gap-x-1'
              >
                <Moon className='h-[1.2rem] w-[1.2rem] transition-all' />
                Dark theme
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem
                onClick={() => setTheme('light')}
                className='md:hidden flex items-center cursor-pointer gap-x-1'
              >
                <SunDim className='h-[1.2rem] w-[1.2rem] rotate-0 transition-all' />
                Light theme
              </DropdownMenuItem>
            </>
          )}
          <div className='md:hidden flex items-center justify-center mt-2 mb-2'>
            <Badge
              variant={'outline'}
              className='text-green-500 border-green-500 rounded-full'
            >
              Delay 5 min <GoDotFill className='text-green-500' />
            </Badge>
          </div>
        </DropdownMenuContent>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default HomeMenu;
