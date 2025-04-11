import { createRoot } from 'react-dom/client';

import i18n from './i18n';
import { useAppStore } from './store/app';

import { App } from '@/app';

const storedLang = useAppStore.getState().lang;

if (storedLang) {
  i18n.changeLanguage(storedLang);
}

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(<App />);
