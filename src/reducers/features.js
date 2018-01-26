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
      if (state.map(feature => feature.properties.article.pageid)
                .indexOf(action.feature.properties.article.pageid) >= 0) {
        return state;
      } else {
        return [...state, action.feature];
      }
    case REMOVE_FEATURE:
      return state.filter(feature => feature.id !== action.feature.id);
    case TOGGLE_FEATURE:
      return state.map(feature => {
        if (feature.id === action.feature.id) {
          feature.properties.visibility = !feature.properties.visibility;
        }
        return feature;
      });
    case SELECT_FEATURE:
      return state.map(feature => {
        feature.properties.selected = (feature.id === action.feature.id);
        return feature;
      });
    case CLEAR_SELECTED_FEATURE:
      return state.map(feature => {
        feature.properties.selected = false;
        return feature;
      });
    default:
      return state;
  }
}

export default features;
