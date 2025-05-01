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
import { SunDimIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

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

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className='outline-none cursor-pointer bg-[#121318] hover:bg-[#0e0f13] p-1 rounded-full'>
        <div className='items-center justify-center flex gap-x-2'>
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback className='text-[#121318]'>CT</AvatarFallback>
          </Avatar>
          <div className='text-white text-sm'>
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
            className={`transition-transform duration-300 text-white ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-[#121318] text-white border-gray-400/10'>
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
        <DropdownMenuSeparator className='bg-gray-400/10' />
        <DropdownMenuItem className='cursor-pointer'>
          <CgProfile className='text-white' />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer'>
          <RiVipDiamondFill className='text-white' /> Subscription
          <span className='text-xs bg-[#F0B90B] px-1 rounded-full'>soon</span>
        </DropdownMenuItem>
        {headerMenuLinks?.map((menu, index) => {
          return (
            <DropdownMenuItem
              key={index}
              className='cursor-pointer lg:hidden block'
              onClick={() => router.push(menu.href)}
            >
              <span className='flex items-center gap-x-1'>
                {menu.menuIcon && <menu.menuIcon className='text-white' />}
                {menu.name}
                {menu.icon && <menu.icon className='text-[#f6465d]' />}
              </span>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuItem className='md:hidden flex items-center cursor-pointer'>
          <SunDimIcon className='text-white md:hidden block' />
          Light theme
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer'>
          <RiSettings3Fill className='text-white' /> Settings
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer' onClick={logout}>
          <RiLogoutBoxRFill className='text-white' /> Logout
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
    </DropdownMenu>
  );
};

export default UserMenu;
