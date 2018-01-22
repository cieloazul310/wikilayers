import { combineReducers } from 'redux';
import latestArticle from './latestArticle';
import baseLayers from './baseLayers';
import features from './features';
import mapView from './mapView';
import selectedFeature from './selectedFeature';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  router: routerReducer,
  latestArticle,
  baseLayers,
  features,
  selectedFeature,
  mapView,
});

export default rootReducer;
