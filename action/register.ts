'use client';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export const register = async () => {
  await signIn('google', { redirectTo: DEFAULT_LOGIN_REDIRECT });
};
