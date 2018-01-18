import { combineReducers } from 'redux';
import {
  RELOAD
 } from '../actions';
import latestArticle from './latestArticle';
import currentView from './currentView';
import baseLayers from './baseLayers';
import features from './features';

function lastLoad(state = new Date(), action) {
  switch (action.type) {
    case RELOAD:
      return action.date;
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  lastLoad,
  latestArticle,
  currentView,
  baseLayers,
  features
});

export default rootReducer;
