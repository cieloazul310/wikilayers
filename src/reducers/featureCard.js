import {
  REQUEST_ARTICLE,
  RECEIVE_ARTICLE,
  INVALIDATE_TITLE,
  SELECT_FEATURE,
  CLEAR_SELECTED_FEATURE
} from '../actions';

const initialState = {
  status: 'none',
  article: {},
};

function featureCard(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTICLE:
      return {
        status: 'fetching',
        article: {},
      };
    case RECEIVE_ARTICLE:
      return {
        status: 'success',
        title: action.title,
        article: action.article,
      };
    case INVALIDATE_TITLE:
      return {
        status: 'failure',
        title: action.title,
        article: {},
      };
    case SELECT_FEATURE:
      return {
        status: 'existing',
        title: action.feature.get('name'),
        article: action.feature.get('article')
      };
    case CLEAR_SELECTED_FEATURE:
      return initialState;
    default:
      return state;
  }
}

export default featureCard;
