import { useTranslation } from '@superlink/i18n';
import { Checkbox, Form } from 'antd';
import { Rule } from 'rc-field-form/lib/interface';
import { VFC } from 'react';
const INPUT_NAME = 'isAccept';

export const AcceptPolicyFormItem: VFC = () => {
  const { t } = useTranslation();
  const rules: Rule[] = [
    {
      required: true,
      pattern: /true/,
      message: t('user:error.policy.must_accept'),
    },
  ];

  return (
    <Form.Item rules={rules} valuePropName="checked" name={INPUT_NAME}>
      <Checkbox>{t('user:form.form_item.policy.label')}</Checkbox>
    </Form.Item>
  );
};
