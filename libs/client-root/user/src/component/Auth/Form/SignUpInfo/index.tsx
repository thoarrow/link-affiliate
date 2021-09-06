import clsx from 'clsx';
import { VFC } from 'react';

import { EmailFormItem } from '../../FormItem/Email';
import { PasswordFormItem } from '../../FormItem/Password';
import { ConfirmPasswordItem } from '../../FormItem/PasswordConfirm';
import styles from './style.module.less';

export const SignUpInfo: VFC = () => {
  return (
    <div className={clsx(styles.accountInfoContainer)}>
      <EmailFormItem />
      <PasswordFormItem isLogin={false} />
      <ConfirmPasswordItem />
    </div>
  );
};
