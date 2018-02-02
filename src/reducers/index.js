import { combineReducers } from 'redux';
import visibleBaseLayer from './visibleBaseLayer';
import features from './features';
import mapView from './mapView';
import selectedFeature from './selectedFeature';
import featureCard from './featureCard';
import mapConfigure from './mapConfigure';
import textCache from './textCache';
import searchLang from './searchLang';
import { routerReducer } from 'react-router-redux';
import { i18nReducer } from 'react-redux-i18n';

const rootReducer = combineReducers({
  router: routerReducer,
  visibleBaseLayer,
  features,
  selectedFeature,
  mapView,
  featureCard,
  mapConfigure,
  textCache,
  searchLang,
  i18n: i18nReducer
});

export default rootReducer;
