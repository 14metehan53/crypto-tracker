'use client';
import React from 'react';
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === '/auth/sign-in' || pathname === '/auth/sign-up' ? (
        <div>{children}</div>
      ) : (
        <>
          <Header />
          {children}
        </>
      )}
    </>
  );
};

export default LayoutPage;
