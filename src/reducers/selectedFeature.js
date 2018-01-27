import {
  SELECT_FEATURE,
  CLEAR_SELECTED_FEATURE,
  CLEAR_FEATURE_CARD,
  INITIALIZE,
 } from '../actions';

//@TODO: set null state to null instead of false

function selectedFeature(state = {}, action) {
  switch (action.type) {
    case SELECT_FEATURE:
      return action.feature;
    case CLEAR_SELECTED_FEATURE:
    case CLEAR_FEATURE_CARD:
      return {};
    case INITIALIZE:
      if (action.target === 'selectedFeature' || action.target === 'ALL') {
        return {};
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default selectedFeature;
