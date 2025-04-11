import auth from '/i18n/en/auth.json';
import profile from '/i18n/en/profile.json';
import services from '/i18n/en/services.json';
import tours from '/i18n/tours/auth.json';
import translation from '/i18n/en/translation.json';

const locales = {
  auth,
  profile,
  services,
  tours,
  translation,
};

interface Resources {
  uz: typeof locales;
  ru: typeof locales;
  en: typeof locales;
}

export default Resources;
