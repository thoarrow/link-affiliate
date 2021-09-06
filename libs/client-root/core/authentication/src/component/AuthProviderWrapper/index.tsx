import { LoadingOutlined } from '@ant-design/icons';
import {
  LOGIN_PATH,
  SESSION_CLIENT_KEEP_ALIVE,
  SESSION_CLIENT_MAX_AGE,
  SIGN_UP_PATH,
  useSession,
} from '@superlink/client-root/core/authentication';
import { ApolloProviderWrapper } from '@superlink/client-root/core/graphql';
import { LoginUserState } from '@superlink/client-root/user';
import { Result } from 'antd';
import { useRouter } from 'next/router';
import { Provider as NextAuthProvider, signIn } from 'next-auth/client';
import { FC, useEffect, useState } from 'react';

export const AuthProviderWrapper: FC = ({ children }) => {
  const [isSetupCompleted, setIsSetupCompleted] = useState(false);
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!session || !session.user) {
      if (
        !(
          router.pathname.includes(LOGIN_PATH) ||
          router.pathname.includes(SIGN_UP_PATH)
        )
      ) {
        signIn();
      } else {
        setIsSetupCompleted(true);
      }
    } else if (
      router.pathname.includes(LOGIN_PATH) ||
      router.pathname.includes(SIGN_UP_PATH)
    ) {
      let redirectUrl = '/';
      if (router.query.callbackUrl) {
        redirectUrl = router.query.callbackUrl as string;
      }

      router.push(redirectUrl);
    } else {
      const loginUserState = LoginUserState.getInstance();
      loginUserState.setStateValue(session.user);


      setIsSetupCompleted(true);
    }
  }, [session, loading, router]);

  if (loading || !isSetupCompleted) {
    return <Result icon={<LoadingOutlined />} />;
  }

  return (
    <NextAuthProvider
      session={session || undefined}
      options={{
        clientMaxAge: SESSION_CLIENT_MAX_AGE,
        keepAlive: SESSION_CLIENT_KEEP_ALIVE,
      }}
    >
      <ApolloProviderWrapper accessToken={session ? session.accessToken : ''}>
        {children}
      </ApolloProviderWrapper>
    </NextAuthProvider>
  );
};
