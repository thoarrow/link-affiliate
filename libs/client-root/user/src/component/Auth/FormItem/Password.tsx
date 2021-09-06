import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useTranslation } from '@superlink/i18n';
import { UserPasswordInputPolicies } from '@superlink/shared';
import { Form, Input } from 'antd';
import clsx from 'clsx';
import { Rule } from 'rc-field-form/lib/interface';
import { VFC } from 'react';

import styles from './style.module.less';

interface ComponentProps {
  isLogin: boolean;
}

export const PasswordFormItem: VFC<ComponentProps> = ({ isLogin }) => {
  const { t } = useTranslation();
  const rules: Rule[] = isLogin
    ? [
      {
        required: true,
        message: t('general:error.form_item.required', {
          item: t('user:form.form_item.password.placeholder'),
        }),
      },
    ]
    : [
      {
        required: true,
        message: t('general:error.form_item.required', {
          item: t('user:form.form_item.password.placeholder'),
        }),
      },
      {
        min: UserPasswordInputPolicies.MIN_LENGTH,
        max: UserPasswordInputPolicies.MAX_LENGTH,
        message: t('user:error.password.invalid_length'),
      },
      {
        pattern: UserPasswordInputPolicies.VALID_PATTERN,
        message: t('user:error.password.not_enough_strong'),
      },
    ];

  return (
    <Form.Item
      className={clsx(styles.formItem)}
      name={UserPasswordInputPolicies.INPUT_NAME}
      rules={rules}
      label={t('user:form.form_item.password.label')}
    >
      <Input.Password
        placeholder={t('user:form.form_item.password.placeholder')}
        maxLength={20}
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        className={clsx(styles.formInput)}
      />
    </Form.Item>
  );
};
