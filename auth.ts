import clientPromise from '@/app/helpers/api/database';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Nodemailer from 'next-auth/providers/nodemailer';
import { saltAndHashPassword } from './app/helpers/authHelpers';
import UsersRepository from './app/repository/UsersRepository';

const USER_REPOSITORY = new UsersRepository();

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null

        // logic to salt and hash password
        const pwHash = saltAndHashPassword(credentials.password)

        // logic to verify if user exists
        user = await USER_REPOSITORY.getUserFromDb(credentials.email, pwHash);

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.")
        }

        // return user object with the their profile data
        return user
      },
    }),
    Nodemailer({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt',
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
