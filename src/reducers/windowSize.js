import { RESIZE } from '../actions';

const initialState = {
  width: window.innerWidth,
  height: window.innerHeight,
};

function windowSize(state = initialState, action) {
  switch (action.type) {
    case RESIZE:
      return {
        width: action.width,
        height: action.height
      };
    default:
      return state;
  }
}

export default windowSize;
