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
      // Don't add feature which already exists.
      if (state.map(feature => feature.get('article').pageid)
                .indexOf(action.feature.get('article').pageid) >= 0) {
        return state;
      } else {
        return [...state, action.feature];
      }
    case REMOVE_FEATURE:
      return state.filter(feature => feature.getId() !== action.feature.getId());
    case TOGGLE_FEATURE:
      return state.map(feature => {
        if (feature.getId() === action.feature.getId()) {
          feature.setProperties({
            visibility: !feature.get('visibility')
          });
        }
        return feature;
      });
    case SELECT_FEATURE:
      return state.map(feature => {
        feature.setProperties({
          selected: (feature.getId() === action.feature.getId())
        });
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
