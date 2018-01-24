import {
  REQUEST_TEXT,
  RECEIVE_TEXT,
  SELECT_FEATURE,
  CLEAR_SELECTED_FEATURE,
} from '../actions';

const initialState = {
  status: 'none',
  history: [],
  next: undefined,
  pages: {}
};

function textCache(state = initialState, action) {
  switch (action.type) {
    case SELECT_FEATURE:
      return {
        ...state,
        next: action.feature.get('article').pageid,
      };
    case CLEAR_SELECTED_FEATURE:
      return {
        ...state,
        next: undefined,
      };
    case REQUEST_TEXT:
      return {
        ...state,
        status: 'Fetching',
      };
    case RECEIVE_TEXT:
      const noi = {
        status: 'Received',
        history: [...state.history, state.next],
        next: undefined,
        pages: state.pages
      };
      noi.pages[action.page.pageid.toString()] = action.page;
      return Object.assign({}, noi);
    default:
      return state;
  }
}

export default textCache;
