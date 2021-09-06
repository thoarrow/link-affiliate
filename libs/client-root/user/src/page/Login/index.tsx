import { IPage } from "@superlink/client-root/shared";
import { useTranslation } from "@superlink/i18n";
import { LoginArgsDto } from "@superlink/shared";
import { Form } from 'antd';
import { useEffect } from 'react';

import { LoginInfo } from "../../component/Auth/Form/LoginInfo";
import { KeepLoginFormItem } from "../../component/Auth/FormItem/KeepLogin";
import { SubmitFormItem } from "../../component/Auth/FormItem/Submit";
import { Title } from "../../component/Auth/Title";
import { AuthLayout } from '../../layout/AuthLayout';
import { useLogin } from "./hook/useLogin";

export const Login: IPage = () => {
    const { t } = useTranslation('user');
    const [form] = Form.useForm<LoginArgsDto>();
    const { login, loading, lastLoginEmail } = useLogin();

    useEffect(() => {
        form.setFieldsValue({ email: lastLoginEmail });
    }, [form, lastLoginEmail]);

    return <AuthLayout
        title={t('page_title.sign_in')}
        redirectProps={{
            question: t('form.sign_in.not_have_account_question'),
            message: t('form.sign_in.sign_up_redirect'),
            url: '/signup',
        }}
        socialButtonsProps={{
            disabled: loading,
            facebookLabel: t('form.sign_in.facebook_sign_in_button'),
            googleLabel: t('form.sign_in.google_sign_in_button'),
        }}
    >
        <Title
            formTitle={t('form.sign_in.title')}
        />
        <Form layout="vertical" form={form} onFinish={login}>
            <LoginInfo />
            <KeepLoginFormItem />
            <SubmitFormItem
                loading={loading}
                label={t('form.sign_in.submit_button')}
            />
        </Form>
    </AuthLayout>
}
