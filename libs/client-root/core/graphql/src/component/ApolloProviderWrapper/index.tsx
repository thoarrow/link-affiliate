import { ApolloProvider } from '@apollo/client';
import { ApolloClientWrapper } from '@superlink/client-root/core/graphql';
import { FC } from 'react';

interface ApolloProviderWrapperProps {
  accessToken: string;
}

export const ApolloProviderWrapper: FC<ApolloProviderWrapperProps> = ({
  children,
  accessToken,
}) => {
  const apolloClientWrapper = ApolloClientWrapper.getInstance();

  return (
    <ApolloProvider client={apolloClientWrapper.getClient(accessToken)}>
      {children}
    </ApolloProvider>
  );
};
