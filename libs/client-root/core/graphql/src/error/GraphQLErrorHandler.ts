import { t } from '@superlink/i18n';
import { message as AntdMessage } from 'antd';
import { GraphQLError } from 'graphql';

export class GraphQLErrorHandler {
  private static isSsr: boolean = typeof document === 'undefined';
  private static instance: GraphQLErrorHandler;

  public static getInstance(): GraphQLErrorHandler {
    if (!this.instance) {
      this.instance = new GraphQLErrorHandler();
    }

    return this.instance;
  }

  public async handleGraphQLError(error: GraphQLError): Promise<void> {
    const message = t(error.message, error.extensions);
    if (GraphQLErrorHandler.isSsr) {
      throw new Error(message);
    }

    AntdMessage.error(message);
  }

  public async handleNetworkError(): Promise<void> {
    const message = t('general:error.connect_failed');
    if (GraphQLErrorHandler.isSsr) {
      throw new Error(message);
    }

    AntdMessage.error(message);
  }
}
