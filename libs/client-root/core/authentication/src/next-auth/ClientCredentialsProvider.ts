import { ApolloClientWrapper } from '@superlink/client-root/core/graphql';
import {
  JwtPayload,
  LoginArgsDto,
  LoginResponseDto,
  UserInfo,
} from '@superlink/shared';
import jwtDecode from 'jwt-decode';
import { Provider } from 'next-auth/providers';

import { LOGIN_QUERY } from './query';

export function ClientCredentialsProvider(): Provider {
  return {
    id: 'credentials',
    name: 'Credentials',
    type: 'credentials',
    credentials: {},
    async authorize(credentials: {
      email: string;
      password: string;
    }): Promise<JwtPayload | null> {
      const apolloClient = ApolloClientWrapper.getInstance().getClient('');
      const res = await apolloClient.query<LoginResponseDto, LoginArgsDto>({
        query: LOGIN_QUERY,
        variables: credentials,
      });

      const accessToken = res.data.login.token;
      const userInfo = jwtDecode<UserInfo>(accessToken);

      return { accessToken, userInfo };
    },
  };
}
