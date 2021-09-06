import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import clsx from 'clsx';
import { FC } from 'react';

import styles from './style.module.less';

export const Button: FC<ButtonProps> = ({
  children,
  className,
  ...buttonProps
}) => {
  return (
    <AntButton className={clsx(styles.buttonClass, className)} {...buttonProps}>
      {children}
    </AntButton>
  );
};
