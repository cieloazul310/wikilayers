import { TOGGLE_LAYER, INITIALIZE } from '../actions';

// @TODO: should use another key
const initialState = '地理院地図';

function visibleBaseLayer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LAYER:
      return action.title;
    case INITIALIZE:
      if (action.target === 'visibleBaseLayer' || action.target === 'ALL') {
        return initialState;
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default visibleBaseLayer;
