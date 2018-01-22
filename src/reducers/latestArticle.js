import {
  RECEIVE_ARTICLE,
  INVALIDATE_TITLE,
 } from '../actions';

/*
const articles = {
  fetched: {
    missing: true,
  },
  last: {
    pageid,
    title,
    summary,
  },
  selected: {
    pageid,
    title,
    summary,
  }
};
*/

function latestArticle(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ARTICLE:
      return action.data.query.pages[0];
    case INVALIDATE_TITLE:
      return {
        title: action.title,
        missing: true,
      };
    default:
      return state;
  }
}

export default latestArticle;
