import { UserRole } from '@prisma/client';
import NextAuth, { type DefaultSession } from 'next-auth';

export type ExtendedUser = DefaultSession['user'] & {
  image: string;
  name: string;
  role: UserRole;
  email: string;
  emailVerified?: Date | null | undefined;
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}
