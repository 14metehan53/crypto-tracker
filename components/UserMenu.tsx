'use client';
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { logout } from '@/action/logout';
import { PiSealCheckFill, PiSealWarningFill } from 'react-icons/pi';
import { MdOutlineArrowDropDownCircle, MdVerified } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import {
  RiVipDiamondFill,
  RiSettings3Fill,
  RiLogoutBoxRFill,
} from 'react-icons/ri';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { headerMenuLinks } from '@/constants/links';
import { UserRole } from '@prisma/client';
import { ExtendedUser } from '@/types/session';
import maskEmail from '@/action/maskEmail';
import { Badge } from '@/components/ui/badge';
import { GoDotFill } from 'react-icons/go';
import { useRouter } from 'next/navigation';
import { Moon, SunDim } from 'lucide-react';
import { useTheme } from 'next-themes';

const UserMenu = ({
  image,
  name,
  email,
  emailVerified,
  role,
}: ExtendedUser) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isVerified = !!emailVerified;
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className='outline-none cursor-pointer bg-gray-100 dark:bg-[#121318] dark:hover:bg-[#0e0f13] hover:bg-[#ecececd5] p-1 rounded-full'>
        <div className='items-center justify-center flex gap-x-2'>
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback className='text-[#121318] bg-white'>
              CT
            </AvatarFallback>
          </Avatar>
          <div className='dark:text-white text-[#121318] text-sm'>
            <div className='flex items-center gap-x-1'>
              {name.length > 11 ? `${name.slice(0, 11)}...` : name}
              {role && role === UserRole.ADMIN && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <MdVerified className='text-yellow-500' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Owner badge</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
          <MdOutlineArrowDropDownCircle
            size={25}
            className={`transition-transform duration-300 dark:text-white text-gray-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='dark:bg-[#121318] bg-gray-100 dark:text-white dark:border-gray-400/10 border-[#000]/10'>
        <DropdownMenuLabel className='grid grid-row-2'>
          <div className='flex items-center gap-x-1'>
            {name.length > 16 ? `${name.slice(0, 16)}...` : name}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  {role && role === UserRole.ADMIN && (
                    <MdVerified className='text-yellow-500' />
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  {role && role === UserRole.ADMIN && <p>Owner badge</p>}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className='text-xs flex gap-x-1 items-center rounded-sm'>
            {email && maskEmail(email)}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  {isVerified ? (
                    <PiSealCheckFill className='text-green-500' size={15} />
                  ) : (
                    <PiSealWarningFill className='text-red-500' size={15} />
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  {isVerified ? (
                    <p>Verified email address</p>
                  ) : (
                    <p>Not verified email address</p>
                  )}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className='dark:bg-gray-400/10 bg-[#000]/10' />
        <DropdownMenuItem className='cursor-pointer'>
          <span className='gap-x-1 flex items-center'>
            <CgProfile className='dark:text-white text-[#121318]' />
            Profile
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer'>
          <span className='gap-x-1 flex items-center'>
            <RiVipDiamondFill className='dark:text-white text-[#121318]' />
            Subscription
            <span className='text-xs bg-[#F0B90B] px-1 rounded-full'>soon</span>
          </span>
        </DropdownMenuItem>
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
              <SunDim className='h-[1.2rem] w-[1.2rem] transition-all' />
              Light theme
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuItem className='cursor-pointer'>
          <span className='gap-x-1 flex items-center'>
            <RiSettings3Fill className='dark:text-white text-[#121318]' />
            Settings
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer' onClick={logout}>
          <span className='gap-x-1 flex items-center'>
            <RiLogoutBoxRFill className='dark:text-white text-[#121318]' />{' '}
            Logout
          </span>
        </DropdownMenuItem>
        <div className='md:hidden flex items-center justify-center mt-2 mb-2'>
          <Badge
            variant={'outline'}
            className='text-green-500 border-green-500 rounded-full'
          >
            Delay 5 min <GoDotFill className='text-green-500' />
          </Badge>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
