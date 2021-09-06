import {
  ClientCredentialsProvider,
  jwt,
  LOGIN_PATH,
  session,
  SESSION_MAX_AGE,
  SESSION_UPDATE_AGE,
} from '@superlink/client-root/core/authentication';
import { AppMode } from '@superlink/shared';
import NextAuth from 'next-auth';

export default NextAuth({
  providers: [ClientCredentialsProvider()],
  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true,
    signingKey: process.env.JWT_SIGNING_KEY,
    encryptionKey: process.env.JWT_ENCRYPTION_KEY,
  },
  callbacks: {
    jwt,
    session,
  },
  pages: {
    error: LOGIN_PATH,
    signIn: LOGIN_PATH,
  },
  session: {
    maxAge: SESSION_MAX_AGE,
    updateAge: SESSION_UPDATE_AGE,
  },
  debug: process.env.APP_MODE !== AppMode.PRODUCTION,
});
