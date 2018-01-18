import {
  ADD_FEATURE,
  REMOVE_FEATURE,
  TOGGLE_FEATURE
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
        (feature.index === action.index)
          ? {...feature, visibility: !feature.visibility}
          : feature
      });
    default:
      return state;
  }
}

export default features;
