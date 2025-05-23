import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CgGoogle } from 'react-icons/cg';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { register } from '@/action/register';

const RegisterForm = () => {
  return (
    <div className='min-h-screen w-full flex flex-col md:flex-row bg-[#121318]'>
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-12 text-center bg-[#0f1014]'>
        <div className='gap-x-1 flex items-center mb-4'>
          <div className='text-3xl font-bold text-white'>Sign up</div>
          <Badge className='p-1 rounded-sm text-xs text-green-500 bg-[#00c95069]'>
            active
          </Badge>
        </div>

        <p className='text-gray-300 mb-6'>
          Sign up easily and securely with your Google account.
        </p>
        <Button
          onClick={register}
          variant='outline'
          className='cursor-pointer dark:text-white text-[#121318] hover:bg-gray-100 flex items-center justify-center gap-2 w-full max-w-xs'
        >
          <CgGoogle size={20} />
          Sign up with Google
        </Button>
        <p className='mt-4 text-sm text-gray-500'>
          Do you already have an account?{' '}
          <Link href='/auth/signin' className='text-[#F0B90B] hover:underline'>
            Sign in
          </Link>
        </p>
        <p className='mt-2 text-sm text-gray-500 hover:underline underline-offset-2 cursor-pointer'>
          <Link href={'/'}>home</Link>
        </p>
      </div>
      <div className='relative w-full h-[52vh] md:w-1/2 md:h-auto overflow-hidden'>
        <Image
          priority
          src='/images/crypto-tracker.png'
          alt='crypto tracker'
          fill
          draggable={false}
          className='object-cover select-none'
        />
      </div>
    </div>
  );
};

export default RegisterForm;
