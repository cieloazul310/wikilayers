import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

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

  return {
    store,
    persistor
  };
}
