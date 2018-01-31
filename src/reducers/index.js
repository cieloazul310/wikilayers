import { combineReducers } from 'redux';
import visibleBaseLayer from './visibleBaseLayer';
import features from './features';
import mapView from './mapView';
import selectedFeature from './selectedFeature';
import featureCard from './featureCard';
import mapConfigure from './mapConfigure';
import textCache from './textCache';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  router: routerReducer,
  visibleBaseLayer,
  features,
  selectedFeature,
  mapView,
  featureCard,
  mapConfigure,
  textCache
});

export default rootReducer;
