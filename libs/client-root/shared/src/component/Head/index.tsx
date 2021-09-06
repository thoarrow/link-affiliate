import { useTranslation } from '@superlink/i18n';
import NextHead from 'next/head';
import React from 'react';

interface ComponentProps {
  title: string;
}

export const Head: React.FC<ComponentProps> = ({ title }) => {
  const { t } = useTranslation('general');

  return (
    <NextHead>
      <title>{`${title} | ${t('business.brand')}`}</title>
    </NextHead>
  );
};
