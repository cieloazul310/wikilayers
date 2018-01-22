import {
  UPDATE_MAPVIEW,
  SET_TO_FEATURE,
  ZOOM_TO_FEATURE,
 } from '../actions';
import View from 'ol/view';
import Proj from 'ol/proj';

const initialView = new View({
  center: Proj.fromLonLat([137.834473, 35.799994]),
  zoom: 4.5
});

function mapView(state = initialView, action) {
  switch (action.type) {
    case UPDATE_MAPVIEW:
      return action.view;
    case SET_TO_FEATURE:
      return new View({
        center: action.feature.getGeometry().getCoordinates(),
        zoom: state.getZoom()
      });
    case ZOOM_TO_FEATURE:
      return new View({
        center: action.feature.getGeometry().getCoordinates(),
        zoom: 14
      });
    default:
      return state;
  }
}

export default mapView;
