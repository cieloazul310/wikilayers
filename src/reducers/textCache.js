import {
  REQUEST_TEXT,
  RECEIVE_TEXT,
  ADD_FEATURE,
  SELECT_FEATURE,
  SHOW_TEXT
} from '../actions';

const initialState = {
  status: 'none',
  reserved: {}, // summary {lang, pageid}
  last: {}, // summary {lang, pageid}
  pages: {
    // ja: {13145: {}, 535636: {}, 4153564: {}},
    // en: {4141: {}, 79523: {}},
  }
};

function createNewLangCache(state, action) {
  const summary = action.feature.properties.summary;
  const pages = state.pages;
  pages[summary.lang] = state.pages[summary.lang] || {};

  return pages;
}

function textCache(state = initialState, action) {
  switch (action.type) {
    case SELECT_FEATURE:
      const summary = action.feature.properties.summary;
      if (summary.pageid === state.reserved) {
        return {
          ...state,
          pages: createNewLangCache(state, action),
          status: 'none',
          reserved: state.last,
        }
      } else {
        return {
          ...state,
          pages: createNewLangCache(state, action),
          status: 'Reserve',
          reserved: summary,
        };
      }
    case ADD_FEATURE:
      const art = action.feature.properties.summary;
      return {
        ...state,
        pages: createNewLangCache(state, action),
        status: 'Reserve',
        reserved: art
      };
    case REQUEST_TEXT:
      return {
        ...state,
        status: 'Fetching',
      };
    case RECEIVE_TEXT:
      const noi = Object.assign({}, {
        ...state,
        status: 'Received',
      });
      noi.pages[state.reserved.lang][action.page.pageid.toString()] = action.page;
      return noi;
    case SHOW_TEXT:
      return {
        ...state,
        status: 'Reserve',
        last: action.summary,
      };
    default:
      return state;
  }
}

export default textCache;
