export const UPDATE_MAPVIEW = 'UPDATE_MAPVIEW';
export const SAVE_GEOLOCATION = 'SAVE_GEOLOCATION';

export function updateMapView(viewObj) {
  return {
    type: UPDATE_MAPVIEW,
    view: viewObj
  };
}

export function saveGeolocation(glObj) {
  return {
    type: SAVE_GEOLOCATION,
    geolocation: glObj
  };
}
