import { TOGGLE_LAYER } from '../actions';

function visibleBaseLayer(state = '地理院地図', action) {
  switch (action.type) {
    case TOGGLE_LAYER:
      return action.title;
    default:
      return state;
  }
}

export default visibleBaseLayer;
