import {
  UPDATE_MAPVIEW,
  SET_TO_FEATURE,
  ZOOM_TO_FEATURE,
  INITIALIZE,
 } from '../actions';
import Proj from 'ol/proj';

const initialView = {
  center: Proj.fromLonLat([137.834473, 35.799994]),
  zoom: 4.5,
  enableRotation: false
};

function mapView(state = initialView, action) {
  switch (action.type) {
    case UPDATE_MAPVIEW:
      return action.view;
    case SET_TO_FEATURE:
      return {
        center: action.feature.geometry.coordinates,
        zoom: state.zoom
      };
    case ZOOM_TO_FEATURE:
      return {
        center: action.feature.geometry.coordinates,
        zoom: 12
      };
    case INITIALIZE:
      if (action.target === 'mapView' || action.target === 'ALL') {
        return initialView;
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default mapView;
