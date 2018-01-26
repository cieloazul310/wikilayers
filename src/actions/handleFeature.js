export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const TOGGLE_FEATURE = 'TOGGLE_FEATURE';
export const SELECT_FEATURE = 'SELECT_FEATURE';
export const CLEAR_SELECTED_FEATURE = 'CLEAR_SELECTED_FEATURE';
export const SET_TO_FEATURE = 'SET_TO_FEATURE';
export const ZOOM_TO_FEATURE = 'ZOOM_TO_FEATURE';
export const CLEAR_FEATURE_CARD = 'CLEAR_FEATURE_CARD';

export function addFeature(feature) {
  feature.id = feature.properties.summary.date;
  return {
    type: ADD_FEATURE,
    feature
  };
}

export function removeFeature(feature) {
  return {
    type: REMOVE_FEATURE,
    feature
  };
}

export function toggleFeature(feature) {
  return {
    type: TOGGLE_FEATURE,
    feature
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
  };
}

export function setToFeature(feature) {
  return {
    type: SET_TO_FEATURE,
    feature
  };
}

export function zoomToFeature(feature) {
  return {
    type: ZOOM_TO_FEATURE,
    feature
  };
}

export function clearFeatureCard() {
  return {
    type: CLEAR_FEATURE_CARD,
  };
}
