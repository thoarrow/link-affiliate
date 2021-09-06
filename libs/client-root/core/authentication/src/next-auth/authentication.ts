import { ApolloClientWrapper } from '@superlink/client-root/core/graphql';
import clientApi from 'next-auth/client';

export const signIn = clientApi.signIn;

export const signOut = async () => {
  await ApolloClientWrapper.getInstance().resetStore();

  return clientApi.signOut({ redirect: false });
};
