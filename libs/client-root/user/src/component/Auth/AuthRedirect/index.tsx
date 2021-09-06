import { Typography } from 'antd';
import clsx from 'clsx';
import Link from 'next/link';
import { VFC } from 'react';

import styles from './style.module.less';

export interface AuthRedirectProps {
  question: string;
  message: string;
  url: string;
}

export const AuthRedirect: VFC<AuthRedirectProps> = ({
  question,
  message,
  url,
}) => {
  return (
    <div className={clsx(styles.signupRedirect)}>
      <Typography.Text>
        {question}&nbsp;
        <Link href={url}>
          <Typography.Link href={url}>{message}</Typography.Link>
        </Link>
      </Typography.Text>
    </div>
  );
};
