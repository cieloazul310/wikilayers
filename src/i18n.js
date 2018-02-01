import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';

const i18n = i18next.use(reactI18nextModule).init({
  lng: 'ja',
  debug: true,
  resources: {
    ja: {
      translation: {
        key: 'Wikipediaを検索して地図に表示しよう！'
      }
    },
    en: {
      translation: {
        key: "Let's Search Wikipedia and View on Map!"
      }
    }
  },
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  }
});

export default i18n;
