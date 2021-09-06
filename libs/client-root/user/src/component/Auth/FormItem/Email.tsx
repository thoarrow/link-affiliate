import { useTranslation } from '@superlink/i18n';
import { UserEmailInputPolicies } from '@superlink/shared';
import { Form, Input } from 'antd';
import clsx from 'clsx';
import { Rule } from 'rc-field-form/lib/interface';
import { VFC } from 'react';

import styles from './style.module.less';

export const EmailFormItem: VFC = () => {
  const { t } = useTranslation();
  const rules: Rule[] = [
    {
      required: true,
      message: t('general:error.form_item.required', {
        item: t('user:form.form_item.email.placeholder'),
      }),
    },
    { type: 'email', message: t('user:error.email.invalid') },
  ];

  return (
    <Form.Item
      className={clsx(styles.formItem)}
      name={UserEmailInputPolicies.INPUT_NAME}
      rules={rules}
      label={t('user:form.form_item.email.label')}
    >
      <Input
        type="email"
        placeholder={t('user:form.form_item.email.placeholder')}
        className={clsx(styles.formInput)}
      />
    </Form.Item>
  );
};
