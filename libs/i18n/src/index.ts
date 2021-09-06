import i18n, { TFunction } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
  initReactI18next,
  useTranslation as i18nextUseTranslation,
} from 'react-i18next';

import { DEFAULT_LANGUAGE } from './constants';
import * as resources from './locales';

export const init = async (): Promise<void> => {
  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: DEFAULT_LANGUAGE,
      interpolation: {
        escapeValue: false, // React already does escaping
      },
      resources,
    });
};

export const t: TFunction = (...args: Parameters<typeof i18n.t>) =>
  i18n.t(...args);

export const useTranslation = (
  ...args: Parameters<typeof i18nextUseTranslation>
): ReturnType<typeof i18nextUseTranslation> => i18nextUseTranslation(...args);

export const getCurrentLanguage = () => i18n.language;
