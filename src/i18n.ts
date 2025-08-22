import { Tolgee, withTolgee } from '@tolgee/i18next';
import { InContextTools } from '@tolgee/web/tools';
import i18n, { InitOptions } from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export const defaultNS = 'translation';
export const lng = 'en';
export const supportedLangs = ['en', 'ru'];
const ns = ['auth', 'profile', 'tours', 'services'];

const commonOptions: InitOptions = {
  lng,
  ns,
  supportedLngs: supportedLangs,
  debug: false,
  fallbackLng: lng,
  defaultNS,
  react: {
    useSuspense: true,
  },
  returnEmptyString: false,
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage'],
  },
  interpolation: {
    escapeValue: false,
  },
};

let i18next = i18n;

if (import.meta.env.APP_I18N === true || import.meta.env.APP_I18N === 'true') {
  const tolgee = Tolgee()
    .use(InContextTools())
    // .use(
    //   BackendFetch({
    //     getPath: ({ language, namespace }) =>
    //       `https://language.coreteam.uz/v2/projects/2/translations/${language}?ns=${namespace}`,
    //     getData: async (data) => {
    //       const json = await data.json();

    //       return json[data.url.split('translations/')[1].split('?ns=')[0]];
    //     },
    //   }),
    // )
    .init({
      apiUrl: import.meta.env.APP_TOLGEE_API_URL,
    });

  i18next = withTolgee(i18n, tolgee);

  i18next.use(initReactI18next).init({
    ...commonOptions,
  });
} else {
  i18next
    .use(initReactI18next)
    .use(Backend)
    .init({
      ...commonOptions,
      backend: {
        loadPath: '/i18n/{{lng}}/{{ns}}.json',
        parse: function (data: string) {
          const json = import.meta.env.DEV
            ? data
            : (data as string).replace(/^\{".*?":(.*?)\}$/, '$1');

          return JSON.parse(json);
        },
      },
    });
}

export default i18next;
