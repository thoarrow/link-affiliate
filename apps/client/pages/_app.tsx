import { AntdConfigProviderWrapper } from '@superlink/client-root/core/antd';
import { AuthProviderWrapper } from '@superlink/client-root/core/authentication';
import { IPage, IPageProps } from '@superlink/client-root/shared';
import * as i18n from '@superlink/i18n';

(async () => {
  await i18n.init();
})();

const MyApp = ({
  Component,
  pageProps,
}: {
  Component: IPage;
  pageProps: IPageProps;
}) => {
  return (
    <AntdConfigProviderWrapper {...pageProps}>
      <AuthProviderWrapper>
        <Component {...pageProps} />
      </AuthProviderWrapper>
    </AntdConfigProviderWrapper>
  );
};

export default MyApp;
