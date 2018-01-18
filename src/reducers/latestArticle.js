import { RECEIVE_ARTICLE } from '../actions';

function latestArticle(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ARTICLE:
      return action.data.query.pages[0];
    default:
      return state;
  }
}

export default latestArticle;
