import {
  ADD_FEATURE,
  REMOVE_FEATURE,
  TOGGLE_FEATURE,
  SELECT_FEATURE,
  CLEAR_SELECTED_FEATURE,
} from '../actions';

function features(state = [], action) {
  switch (action.type) {
    case ADD_FEATURE:
      return [...state, action.feature];
    case REMOVE_FEATURE:
      return state.map((feature, index) => {
        return feature;
      });
    case TOGGLE_FEATURE:
      return state.map((feature, index) => {
        if (index === action.index) {
          feature.setProperties({
            visibility: !feature.get('visibility')
          });
        }
        return feature;
      });
    case CLEAR_SELECTED_FEATURE:
      return state.map(feature => {
        feature.setProperties({
          selected: false
        });
        return feature;
      });
    default:
      return state;
  }
}

export default features;
