import { RESIZE_WINDOW } from '../actions';

const initialState = {
  width: window.innerWidth,
  height: window.innerHeight,
};

function windowSize(state = initialState, action) {
  switch (action.type) {
    case RESIZE_WINDOW:
      return {
        width: action.win.innerWidth,
        height: action.win.innerHeight
      };
    default:
      return state;
  }
}

export default windowSize;
