import { SELECT_FEATURE, CLEAR_SELECTED_FEATURE } from '../actions';

function selectedFeature(state = false, action) {
  switch (action.type) {
    case SELECT_FEATURE:
      return action.feature;
    case CLEAR_SELECTED_FEATURE:
      return false;
    default:
      return state;
  }
}

export default selectedFeature;
