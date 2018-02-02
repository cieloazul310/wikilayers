export * from './fetchArticle';
export * from './mapConfigure';
export * from './handleFeature';
export * from './mapToState';
export * from './fetchText';

export const INITIALIZE = 'INITIALIZE';

export function initialize(target) {
  return {
    type: INITIALIZE,
    target
  };
}

export const SET_SEARCH_LANG = 'SET_SEARCH_LANG';

export function setSearchLang(lang) {
  return {
    type: SET_SEARCH_LANG,
    code: lang.Wiki,
    langType: lang.type
  };
}
