import Icon from '@ant-design/icons';
import { Head } from '@superlink/client-root/shared';
import { useTranslation } from '@superlink/i18n';
import { Col, Divider, Row, Typography } from 'antd';
import clsx from 'clsx';
import { FC } from 'react';

import { ReactComponent as BlackLogo } from '../../../../assets/svg/default-logo-black.svg';
import {
  AuthRedirect,
  AuthRedirectProps,
} from '../../component/Auth/AuthRedirect';
import {
  SocialAuthButtons,
  SocialAuthButtonsProps,
} from '../../component/Auth/SocialAuthButtons';
import styles from './style.module.less';

interface AuthLayoutProps {
  title: string;
  redirectProps: AuthRedirectProps;
  socialButtonsProps: SocialAuthButtonsProps;
}

export const AuthLayout: FC<AuthLayoutProps> = ({
  children,
  title,
  redirectProps,
  socialButtonsProps,
}) => {
  const [t] = useTranslation('general');

  return (
    <>
      <Head title={title} />
      <Row className={clsx(styles.pageContentWrapper)}>
        <Col className={clsx(styles.accountContainer)}>
          <div className={clsx(styles.accountContainerContent)}>
            <Typography.Title level={2} >
              <Icon component={BlackLogo} className={clsx(styles.logo)} />
              {t('business.brand')}
            </Typography.Title>
            <Typography.Text>{t('business.sub_title')}</Typography.Text>
            {children}
            <Divider orientation="center" plain>
              <Typography.Text type="secondary">
                {t('user:form.or')}
              </Typography.Text>
            </Divider>
            <SocialAuthButtons {...socialButtonsProps} />
            <AuthRedirect {...redirectProps} />
          </div>
        </Col>
      </Row>
    </>
  );
};
