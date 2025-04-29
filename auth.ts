import NextAuth from 'next-auth';
import { db } from '@/lib/db';
import { PrismaAdapter } from '@auth/prisma-adapter';
import authConfig from '@/auth.config';
import { UserRole } from '@prisma/client';
import { getUserById } from '@/data/user';

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/auth/signin',
  },

  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.name = token.name as string;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (session.user) {
        session.user.emailVerified = token.emailVerified as Date;
      }

      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.role = existingUser.role;
      token.emailVerified = existingUser.emailVerified;

      return token;
    },
  },

  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
});
