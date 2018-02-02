import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore
} from 'react-redux-i18n';
import translationsObject from './translationsObject';

function getLang() {
  // attributed to https://qiita.com/shogo82148/items/548a6c9904eb19269f8c
  const lang =
    (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language ||
    window.navigator.userLanguage ||
    window.navigator.browserLanguage;
  const primary = lang.split('-')[0];
  return primary;
}

export const history = createHistory({
  basename: '/wikilayers'
});

let middleware = [thunkMiddleware, routerMiddleware(history)];
if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger').createLogger;
  const loggerMiddleware = createLogger();

  middleware = [...middleware, loggerMiddleware];
}

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['router', 'textCache']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(preloadedState) {
  let store = createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
  let persistor = persistStore(store);
  syncTranslationWithStore(store);
  store.dispatch(loadTranslations(translationsObject));
  store.dispatch(setLocale(getLang() !== 'ja' ? 'en' : 'ja'));

  return {
    store,
    persistor
  };
}
