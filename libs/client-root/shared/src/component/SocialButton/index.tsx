import Icon from '@ant-design/icons';
import { ButtonProps } from 'antd/lib/button/button';
import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import FacebookIcon from '../../icons/FacebookIcon';
import GoogleIcon from '../../icons/GoogleIcon';
import { Button } from '../Button';
import styles from './style.module.less';

interface ComponentProps extends ButtonProps {
  social: 'facebook' | 'google';
}

export const SocialButton: FC<ComponentProps> = ({
  social,
  className,
  ...remain
}) => {
  let icon: ReactNode;
  let socialClass = '';
  switch (social) {
    case 'facebook':
      icon = <Icon component={FacebookIcon} className={clsx(styles.icon)} />;
      socialClass = clsx(styles.facebook);
      break;
    case 'google':
      icon = <Icon component={GoogleIcon} className={clsx(styles.icon)} />;
      socialClass = clsx(styles.google);

      break;
  }

  return (
    <Button {...remain} icon={icon} className={clsx(className, socialClass)} />
  );
};
