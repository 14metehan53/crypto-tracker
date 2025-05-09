'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GoDotFill } from 'react-icons/go';
import { FiLogIn } from 'react-icons/fi';
import { RiLoginBoxLine } from 'react-icons/ri';
import { Badge } from '@/components/ui/badge';
import { headerMenuLinks } from '@/constants/links';
import { usePathname, useRouter } from 'next/navigation';
import { useCurrentUser } from '@/hooks/currentUser';
import UserMenu from '@/components/UserMenu';
import HomeMenu from '@/components/HomeMenu';
import { ModeToggle } from '@/components/ModeToggle';

const Header = () => {
  const user = useCurrentUser();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className='relative'>
      <div className='container mx-auto w-full p-4 bg-transparent backdrop-blur-lg flex items-center justify-between z-50'>
        {/* left */}
        <Link
          href={'/'}
          className='text-base sm:text-2xl text-[#ffc400] hover:text-[#ffc400d7] cursor-pointer font-semibold tracking-wide'
        >
          Crypto Tracker
        </Link>

        {/* center */}
        <nav className='gap-8 text-md hidden lg:flex'>
          {headerMenuLinks?.map((menu, index) => {
            return (
              <div key={index} className='flex items-center gap-1'>
                <Link
                  href={menu.href}
                  className={`hover:text-[#E69E00] ${
                    pathname === menu.href ? 'text-yellow-500' : ''
                  }`}
                >
                  {menu.name}
                </Link>
                {menu.icon && <menu.icon className='text-[#f6465d]' />}
              </div>
            );
          })}
        </nav>

        {/* right */}
        <div className='flex items-center space-x-3'>
          <div className='md:flex hidden items-center'>
            <Badge
              variant={'outline'}
              className='text-green-500 border-green-500 rounded-full'
            >
              Delay 5 min <GoDotFill />
            </Badge>
          </div>
          <ModeToggle />
          {user ? (
            <>
              <UserMenu
                image={user.image}
                name={user.name}
                email={user.email}
                emailVerified={user.emailVerified}
                role={user.role}
              />
            </>
          ) : (
            <>
              <Button
                className='cursor-pointer text-[#eaecef] bg-[#121318] hover:bg-[#121318ee] dark:hover:bg-[#0f0f14]'
                variant={'secondary'}
                size={'default'}
                onClick={() => router.push('/auth/signin')}
              >
                <FiLogIn /> Login
              </Button>
              <Button
                className='cursor-pointer dark:text-[#121318] font-bold bg-[#ffc400] hover:bg-[#ffc400de]'
                variant={'secondary'}
                size={'default'}
                onClick={() => router.push('/auth/signup')}
              >
                <RiLoginBoxLine />
                Register
              </Button>
              <HomeMenu />
            </>
          )}
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full border-b dark:border-white/10 border-[#000]/10'></div>
    </header>
  );
};

export default Header;
