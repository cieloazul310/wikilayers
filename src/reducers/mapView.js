import { UPDATE_MAPVIEW } from '../actions';
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
    default: 
      return state;
  }
}

export default mapView;