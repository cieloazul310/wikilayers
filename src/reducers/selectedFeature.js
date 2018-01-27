import {
  SELECT_FEATURE,
  CLEAR_SELECTED_FEATURE,
  INITIALIZE,
 } from '../actions';

//@TODO: set null state to null instead of false

function selectedFeature(state = false, action) {
  switch (action.type) {
    case SELECT_FEATURE:
      return action.feature;
    case CLEAR_SELECTED_FEATURE:
      return false;
    case INITIALIZE:
      if (action.target === 'selectedFeature' || action.target === 'ALL') {
        return false;
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default selectedFeature;
