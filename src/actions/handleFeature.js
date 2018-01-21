export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const TOGGLE_FEATURE = 'TOGGLE_FEATURE';
export const SELECT_FEATURE = 'SELECT_FEATURE';
export const CLEAR_SELECTED_FEATURE = 'CLEAR_SELECTED_FEATURE';
export const SET_FEATURE_VIEW = 'SET_FEATURE_VIEW';

export function addFeature(feature) {
  return {
    type: ADD_FEATURE,
    feature
  };
}

export function removeFeature(index) {
  return {
    type: REMOVE_FEATURE,
    index
  };
}

export function toggleFeature(index) {
  return {
    type: TOGGLE_FEATURE,
    index
  };
}

export function selectFeature(feature) {
  return {
    type: SELECT_FEATURE,
    feature
  };
}

export function clearSelectedFeature() {
  return {
    type: CLEAR_SELECTED_FEATURE
  }
}

export function setFeatureView(feature) {
  return {
    type: SET_FEATURE_VIEW,
    feature
  };
}
