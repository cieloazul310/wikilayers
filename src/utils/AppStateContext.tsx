import * as React from 'react';

import { initialAppState, AppState, Action } from './AppState';

export const AppStateContext = React.createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialAppState,
  dispatch: () => {
    throw new Error();
  },
});

export function useAppState() {
  const { state } = React.useContext(AppStateContext);
  return state;
}

export function useDispatch() {
  const { dispatch } = React.useContext(AppStateContext);
  return dispatch;
}
