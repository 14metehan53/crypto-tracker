'use client';
import React from 'react';
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';
import { authRoutes } from '@/routes';

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === authRoutes[0] || pathname === authRoutes[1] ? (
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
