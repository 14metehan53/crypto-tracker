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
import ThemeMenuSwitcher from '@/components/ThemeMenuSwitcher';
import { FiMenu } from 'react-icons/fi';
import { HiOutlineX } from 'react-icons/hi';
import { Badge } from '@/components/ui/badge';
import { GoDotFill } from 'react-icons/go';

const HomeMenu = () => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <DropdownMenu onOpenChange={setIsClicked}>
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
          <DropdownMenuItem className='md:hidden flex items-center cursor-pointer'>
            <span className='w-full'>
              <ThemeMenuSwitcher />
            </span>
          </DropdownMenuItem>
          <div className='md:hidden flex items-center justify-center mt-2 mb-2'>
            <Badge
              variant={'outline'}
              className='text-green-500 border-green-500 rounded-full'
            >
              Delay 10 sec <GoDotFill className='text-green-500' />
            </Badge>
          </div>
        </DropdownMenuContent>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default HomeMenu;
