import { ExtendedUser } from '@/types/session';
import { useSession } from 'next-auth/react';

export const useCurrentUser = (): ExtendedUser | null => {
  const { data: session } = useSession();
  return session?.user ?? null;
};
