import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();
export const history = createHistory({
  basename: '/wikilayers/'
});

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['router', 'textCache', 'windowSize', 'selectedFeature']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(preloadedState) {
  let store =  createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      routerMiddleware(history)
    )
  );
  let persistor = persistStore(store);

  return {
    store,
    persistor
  };
};
