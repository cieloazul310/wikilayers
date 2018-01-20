import { combineReducers } from 'redux';
import latestArticle from './latestArticle';
import currentView from './currentView';
import baseLayers from './baseLayers';
import features from './features';
import mapView from './mapView';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  router: routerReducer,
  latestArticle,
  currentView,
  baseLayers,
  features,
  mapView,
});

export default rootReducer;
