import {
  TOGGLE_GEOLOCATION,
  TOGGLE_SHOW_LABELS,
  SAVE_GEOLOCATION,
} from '../actions';

const initialConfigure = {
  geolocation: {
    tracking: false,
  },
  showLabels: false,
};

function mapConfigure(state = initialConfigure, action) {
  switch (action.type) {
    case TOGGLE_GEOLOCATION:
      return {
        ...state,
        geolocation: Object.assign({}, state.geolocation, {
          tracking: !state.geolocation.tracking
        })
      };
    case SAVE_GEOLOCATION:
      return {
        ...state,
        geolocation: action.geolocation
      };
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
