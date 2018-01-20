export const UPDATE_MAPVIEW = 'UPDATE_MAPVIEW';

export function updateMapView(view) {
  return {
    type: UPDATE_MAPVIEW,
    view
  }
}
