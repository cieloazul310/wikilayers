import {
  REQUEST_NAME,
  RECEIVE_SUMMARY,
  INVALIDATE_NAME,
  ADD_FEATURE,
  SELECT_FEATURE,
  CLEAR_SELECTED_FEATURE,
  CLEAR_FEATURE_CARD,
  INITIALIZE,
} from '../actions';

const initialState = {
  status: 'none',
  summary: {},
};

function featureCard(state = initialState, action) {
  switch (action.type) {
    case REQUEST_NAME:
      return {
        status: 'fetching',
        summary: {},
      };
    case RECEIVE_SUMMARY:
      return {
        status: 'success',
        name: action.name,
        summary: {
          ...action.summary,
          name: action.name,
          date: action.date,
        },
      };
    case INVALIDATE_NAME:
      return {
        status: 'failure',
        name: action.name,
        summary: {},
      };
    case ADD_FEATURE:
      return {
        ...state,
        status: 'existing'
      };
    case SELECT_FEATURE:
      return {
        status: 'existing',
        name: action.feature.properties.name,
        summary: action.feature.properties.summary
      };
    case CLEAR_SELECTED_FEATURE:
    case CLEAR_FEATURE_CARD:
      return initialState;
    case INITIALIZE:
      if (action.target === 'featureCard' || action.target === 'ALL') {
        return initialState;
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default featureCard;
