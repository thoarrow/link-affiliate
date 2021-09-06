import clsx from 'clsx';
import { VFC } from 'react';

import { EmailFormItem } from '../../FormItem/Email';
import { PasswordFormItem } from '../../FormItem/Password';
import styles from './style.module.less';

export const LoginInfo: VFC = () => {
  return (
    <div className={clsx(styles.loginInfoContainer)}>
      <EmailFormItem />
      <PasswordFormItem isLogin />
    </div>
  );
};
