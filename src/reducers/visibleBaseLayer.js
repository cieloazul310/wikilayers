import { TOGGLE_LAYER, INITIALIZE } from '../actions';

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

// @TODO: should use another key
const initialState = getLang() === 'ja' ? '地理院地図' : 'World Terrain';

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
