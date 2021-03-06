import * as React from 'react';
import { reducer, useInitialAppState } from './utils/AppState';
import { AppStateContext } from './utils/AppStateContext';

interface Props {
  children: React.ReactNode;
}

function AppStateProvider({ children }: Props): JSX.Element {
  const initialAppState = useInitialAppState();
  const [appState, appDispatch] = React.useReducer(reducer, initialAppState);

  React.useEffect(() => {
    localStorage.setItem('wikilayers:AppState', JSON.stringify(appState));
  }, [appState]);

  return <AppStateContext.Provider value={{ state: appState, dispatch: appDispatch }}>{children}</AppStateContext.Provider>;
}

export default AppStateProvider;
