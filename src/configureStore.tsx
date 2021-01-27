import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import { toggleLayer } from './actions';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore
} from 'react-redux-i18n';
import translationsObject from './translationsObject';

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

export default function configureStore(preloadedState?: any) {
  let store = createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
  let persistor = persistStore(store);

  const searchLang = store.getState().searchLang.code;
  syncTranslationWithStore(store);
  store.dispatch(loadTranslations(translationsObject));
  store.dispatch(setLocale(searchLang !== 'ja' ? 'en' : 'ja'));
  if (searchLang !== 'ja') {
    store.dispatch(toggleLayer('World Terrain'));
  }

  return {
    store,
    persistor
  };
}
