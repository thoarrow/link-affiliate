import { useTranslation } from '@superlink/i18n';
import { Checkbox, Form, Space, Typography } from 'antd';
import { VFC } from 'react';

const INPUT_NAME = 'isKeepLogin';

export const KeepLoginFormItem: VFC = () => {
  const { t } = useTranslation();

  return (
    <Space align="baseline" size={90}>
      <Form.Item valuePropName="checked" name={INPUT_NAME}>
        <Checkbox>{t('user:form.sign_in.keeping_sign_in')}</Checkbox>
      </Form.Item>
      <Typography.Link>
        {t('user:form.sign_in.forgot_password_question')}
      </Typography.Link>
    </Space>
  );
};
