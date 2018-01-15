import { combineReducers } from 'redux';
import { RELOAD } from '../actions';

function lastLoad(state = new Date(), action) {
  switch (action.type) {
    case RELOAD:
      return action.date;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  lastLoad
});

export default rootReducer;
