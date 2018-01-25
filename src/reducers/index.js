import { combineReducers } from 'redux';
import baseLayers from './baseLayers';
import features from './features';
import mapView from './mapView';
import selectedFeature from './selectedFeature';
import featureCard from './featureCard';
import mapConfigure from './mapConfigure';
import textCache from './textCache';
import windowSize from './windowSize';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  router: routerReducer,
  baseLayers,
  features,
  selectedFeature,
  mapView,
  featureCard,
  mapConfigure,
  textCache,
  windowSize,
});

export default rootReducer;
