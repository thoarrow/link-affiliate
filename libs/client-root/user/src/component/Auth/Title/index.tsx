import { Typography } from 'antd';
import clsx from 'clsx';
import { VFC } from 'react';

import styles from './style.module.less';

interface ComponentProps {
  formTitle: string;
}

export const Title: VFC<ComponentProps> = ({ formTitle }) => {

  return (
    <div className={clsx(styles.titleContainer)}>
      <Typography.Title className={clsx(styles.titleContent)} level={4}>
        {formTitle}
      </Typography.Title>
    </div>
  );
};
