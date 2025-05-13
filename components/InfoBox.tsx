import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PiInfo } from 'react-icons/pi';

export function InfoBox({ message }: { message: string }) {
  return (
    <Alert className='w-full md:w-[50%] bg-transparent text-orange-400 border-orange-400 dark:border-orange-400/30'>
      <PiInfo className='h-4 w-4' />
      <AlertTitle>Info</AlertTitle>
      <AlertDescription className='text-orange-400'>{message}</AlertDescription>
    </Alert>
  );
}
