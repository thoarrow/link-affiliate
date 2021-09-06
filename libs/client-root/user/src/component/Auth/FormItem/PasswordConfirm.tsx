import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useTranslation } from '@superlink/i18n';
import { UserPasswordConfirmInputPolicies, UserPasswordInputPolicies } from '@superlink/shared';
import { Form, Input } from 'antd';
import clsx from 'clsx';
import { Rule } from 'rc-field-form/lib/interface';
import { VFC } from 'react';

import styles from './style.module.less';

export const ConfirmPasswordItem: VFC = () => {
  const { t } = useTranslation();
  const rules: Rule[] = [
    {
      required: true,
      message: t('general:error.form_item.required', {
        item: t('user:form.form_item.confirm_password.placeholder'),
      }),
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (
          !value ||
          getFieldValue(UserPasswordInputPolicies.INPUT_NAME) === value
        ) {
          return Promise.resolve();
        }

        return Promise.reject(
          new Error(t('user:error.confirm_password.not_match'))
        );
      },
    }),
  ];

  return (
    <Form.Item
      className={clsx(styles.formItem)}
      name={UserPasswordConfirmInputPolicies.INPUT_NAME}
      rules={rules}
    >
      <Input.Password
        placeholder={t('user:form.form_item.confirm_password.placeholder')}
        maxLength={UserPasswordInputPolicies.MAX_LENGTH}
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
    </Form.Item>
  );
};
