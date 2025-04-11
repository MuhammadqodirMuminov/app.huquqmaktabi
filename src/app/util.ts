import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppStore } from '@/store/app';

export const useLang = () => {
  const { lang } = useAppStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
    dayjs.locale(lang);
  }, [lang]);
};
