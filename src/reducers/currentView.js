import { CHANGE_VIEW } from '../actions';

function currentView(state = 'Search', action) {
  switch (action.type) {
    case CHANGE_VIEW:
      return action.filter;
    default:
      return state;
  }
}

export default currentView;
