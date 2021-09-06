import { signIn } from '@superlink/client-root/core/authentication';
import { useTranslation } from '@superlink/i18n';
import { LoginArgsDto } from '@superlink/shared';
import { message } from 'antd';
import { useState } from 'react';

interface UseLoginResult {
  login: (input: LoginArgsDto) => Promise<void>;
  loading: boolean;
  lastLoginEmail: string;
}

const LAST_LOGIN_EMAIL_KEY = 'lastLoginEmail';

export const useLogin = (): UseLoginResult => {
  const [t] = useTranslation('user');
  const [loading, setLoading] = useState(false);
  const lastLoginEmail = localStorage.getItem(LAST_LOGIN_EMAIL_KEY) || '';

  const login = async (input: LoginArgsDto): Promise<void> => {
    setLoading(true);
    localStorage.setItem(LAST_LOGIN_EMAIL_KEY, input.email);
    const res = await signIn<'credentials'>('credentials', {
      ...input,
      redirect: false,
    });

    if (res && res.error) {
      message.error(t(res.error));
    }

    setLoading(false);
  };

  return { login, loading, lastLoginEmail };
};
