export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const TOGGLE_FEATURE = 'TOGGLE_FEATURE';

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
