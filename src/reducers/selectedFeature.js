import { SELECT_FEATURE, CLEAR_SELECTED_FEATURE } from '../actions';

function selectedFeature(state = {}, action) {
  switch (action.type) {
    case SELECT_FEATURE:
      action.feature.setProperties({
        selected: true
      });
      return action.feature;
    case CLEAR_SELECTED_FEATURE:
      return {};
    default:
      return state;
  }
}

export default selectedFeature;
