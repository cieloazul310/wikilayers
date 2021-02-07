import {
  TOGGLE_GEOLOCATION,
  TOGGLE_SHOW_LABELS,
  SAVE_GEOLOCATION,
  INITIALIZE,
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
    case INITIALIZE:
      if (action.target === 'mapConfigure' || action.target === 'ALL') {
        return initialConfigure;
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default mapConfigure;
