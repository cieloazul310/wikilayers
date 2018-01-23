export const TOGGLE_LAYER = 'TOGGLE_LAYER';
export const TOGGLE_GEOLOCATION = 'TOGGLE_GEOLOCATION';
export const TOGGLE_SHOW_LABELS = 'TOGGLE_SHOW_LABELS';

export function toggleLayer(index) {
  return {
    type: TOGGLE_LAYER,
    index
  };
}

export function toggleGeolocation() {
  return {
    type: TOGGLE_GEOLOCATION
  };
}

export function toggleShowLabels() {
  return {
    type: TOGGLE_SHOW_LABELS
  };
}
