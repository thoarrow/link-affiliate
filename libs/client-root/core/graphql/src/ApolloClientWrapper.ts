import { ApolloClient, ApolloLink, from, InMemoryCache } from '@apollo/client';
import { NormalizedCacheObject } from '@apollo/client/cache/inmemory/types';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { AppMode, GRAPHQL_END_POINT } from '@superlink/shared';
import { createUploadLink } from 'apollo-upload-client';

import { RootPolicies } from './cache/RootPolicies';
import { customFetch } from './customFetch';
import { GraphQLErrorHandler } from './error/GraphQLErrorHandler';

export class ApolloClientWrapper {
  private static isSsr: boolean = typeof window === 'undefined';
  private static instance: ApolloClientWrapper;

  private client!: ApolloClient<NormalizedCacheObject>;
  private readonly graphQLExceptionHandler: GraphQLErrorHandler;
  private readonly rootPolicies: RootPolicies;

  constructor(
    graphQLExceptionHandler: GraphQLErrorHandler,
    rootPolicies: RootPolicies
  ) {
    this.graphQLExceptionHandler = graphQLExceptionHandler;
    this.rootPolicies = rootPolicies;
  }

  public static getInstance(): ApolloClientWrapper {
    if (!this.instance) {
      this.instance = new ApolloClientWrapper(
        GraphQLErrorHandler.getInstance(),
        RootPolicies.getInstance()
      );
    }

    return this.instance;
  }

  private getLinks(accessToken: string): ApolloLink {
    const httpLink = ApolloClientWrapper.getHttpLink(
      accessToken
    ) as unknown as ApolloLink;
    const errorLink = this.getErrorLink();

    return new RetryLink().split(
      () => ApolloClientWrapper.isSsr,
      httpLink,
      from([errorLink, httpLink])
    );
  }

  private static getHttpLink(accessToken: string) {
    return createUploadLink({
      uri: `${process.env.NEXT_PUBLIC_SERVER_URL}${GRAPHQL_END_POINT}`,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      fetch: customFetch,
    });
  }

  private getErrorLink(): ApolloLink {
    return onError(({ graphQLErrors, networkError, response }) => {
      if (graphQLErrors && graphQLErrors.length > 0) {
        const firstError = graphQLErrors[0];
        if (response && !firstError.message.includes('file:')) {
          response.errors = undefined;
        }

        this.graphQLExceptionHandler.handleGraphQLError(firstError);
        return;
      }

      if (networkError) {
        this.graphQLExceptionHandler.handleNetworkError();
      }
    });
  }

  public getClient(accessToken: string): ApolloClient<NormalizedCacheObject> {
    this.client = new ApolloClient<NormalizedCacheObject>({
      ssrMode: ApolloClientWrapper.isSsr,
      link: this.getLinks(accessToken),
      cache: new InMemoryCache({
        typePolicies: this.rootPolicies.getTypePolicies(),
      }),
      connectToDevTools:
        process.env.NEXT_PUBLIC_APP_MODE !== AppMode.PRODUCTION,
    });

    return this.client;
  }

  public async resetStore() {
    return this.client.resetStore();
  }
}
