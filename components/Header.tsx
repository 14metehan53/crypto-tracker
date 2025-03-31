import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GoDotFill } from 'react-icons/go';
import { SunDimIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { headerMenuLinks } from '@/constants/links';

const Header = () => {
  return (
    <header className='relative'>
      <div className='container mx-auto w-full p-4 bg-transparent backdrop-blur-lg flex items-center justify-between z-50'>
        {/* left */}
        <Link
          href={''}
          className='text-2xl text-[#e69e00] hover:text-[#d0b90b] cursor-pointer font-semibold tracking-wide'
        >
          Crypto Tracker
        </Link>

        {/* center */}
        <nav className='flex gap-8 text-md'>
          {headerMenuLinks?.map((menu, index) => {
            return (
              <div key={index} className='flex items-center gap-1'>
                <Link href={menu.href} className='hover:text-[#E69E00]'>
                  {menu.name}
                </Link>
                {menu.icon && <menu.icon className='text-[#f6465d]' />}
              </div>
            );
          })}
        </nav>

        {/* right */}
        <div className='flex items-center space-x-3'>
          <div className='flex items-center'>
            <Badge
              variant={'outline'}
              className='text-green-500 border-green-500 rounded-full'
            >
              Delay 10 sec <GoDotFill />
            </Badge>
          </div>
          <SunDimIcon
            size={40}
            className='hover:bg-[#121318] text-[#eaecef] rounded-full cursor-pointer hover:text-white p-2'
          />
          <Button
            className='cursor-pointer text-[#eaecef] bg-[#121318] hover:bg-[#0f0f14]'
            variant={'secondary'}
          >
            Login
          </Button>
          <Button
            className='cursor-pointer font-bold bg-[#F0B90B] hover:bg-[#daaa0f]'
            variant={'secondary'}
          >
            Register
          </Button>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full border-b border-white/10'></div>
    </header>
  );
};

export default Header;
