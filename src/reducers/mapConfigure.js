import {
  TOGGLE_GEOLOCATION,
  TOGGLE_SHOW_LABELS
} from '../actions';

import Geolocation from 'ol/geolocation';

const initialConfigure = {
  geolocation: new Geolocation(),
  showLabels: false,
};

function mapConfigure(state = initialConfigure, action) {
  switch (action.type) {
    case TOGGLE_GEOLOCATION:
      state.geolocation.setTracking(!state.geolocation.getTracking());
      return {...state};
    case TOGGLE_SHOW_LABELS:
      return {
        ...state,
        showLabels: !state.showLabels
      };
    default:
      return state;
  }
}

export default mapConfigure;
