import { Button } from '@superlink/client-root/shared';
import { Form } from 'antd';
import clsx from 'clsx';
import { VFC } from 'react';

import styles from './style.module.less';

interface ComponentProps {
  loading: boolean;
  label: string;
}

export const SubmitFormItem: VFC<ComponentProps> = ({ loading, label }) => {
  return (
    <Form.Item className={clsx(styles.submitFormItem)}>
      <Button
        type="primary"
        size="large"
        block
        htmlType="submit"
        loading={loading}
      >
        {label}
      </Button>
    </Form.Item>
  );
};
