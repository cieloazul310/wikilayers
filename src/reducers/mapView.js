import { UPDATE_MAPVIEW, SET_FEATURE_VIEW } from '../actions';
import View from 'ol/view';
import Proj from 'ol/proj';

const initialView = new View({
  center: Proj.fromLonLat([140.4, 36.6]),
  zoom: 10
});

function mapView(state = initialView, action) {
  switch (action.type) {
    case UPDATE_MAPVIEW:
      return action.view;
    case SET_FEATURE_VIEW:
      const zoom = state.getZoom();
      const coords = action.feature.getGeometry().getCoordinates();
      return new View({
        center: coords,
        zoom: zoom
      });
    default:
      return state;
  }
}

export default mapView;
