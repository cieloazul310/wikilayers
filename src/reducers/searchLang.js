import { SET_SEARCH_LANG, INITIALIZE } from '../actions';

function getLang() {
  // attributed to https://qiita.com/shogo82148/items/548a6c9904eb19269f8c
  const lang =
    (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language ||
    window.navigator.userLanguage ||
    window.navigator.browserLanguage;
  const primary = lang.split('-')[0];
  return primary;
}

const initialState = {
  type: 'auto',
  code: getLang(),
};

function searchLang(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_LANG:
      return {
        type: action.langType,
        code: action.code
      };
    case INITIALIZE:
      if (action.target === 'SEARCH_LANG' || action.target === 'ALL') {
        return initialState;
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default searchLang;
