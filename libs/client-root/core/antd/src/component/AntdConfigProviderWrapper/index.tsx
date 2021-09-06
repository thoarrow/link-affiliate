import { setTwoToneColor } from '@ant-design/icons';
import { getCurrentLanguage } from '@superlink/i18n';
import { ConfigProvider, message } from 'antd';
import en from 'antd/lib/locale/en_US';
import vi from 'antd/lib/locale/vi_VN';
import { Locale } from 'antd/lib/locale-provider';
import { FC } from 'react';

require('../../../../../assets/styles/antd.less');

export const AntdConfigProviderWrapper: FC = ({ children }) => {
  setTwoToneColor('#D1363A');
  message.config({ maxCount: 3 });

  let locale: Locale;
  switch (getCurrentLanguage()) {
    case 'en':
      locale = en;
      break;
    case 'vi':
    default:
      locale = vi;
      break;
  }

  return (
    <ConfigProvider prefixCls="spl" locale={locale}>
      {children}
    </ConfigProvider>
  );
};
