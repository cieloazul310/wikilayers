import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import configureStore from './configureStore';

import App from './App';
import { themeReducer, initialThemeState } from './utils/themeReducer';
import { DispatchContext } from './utils/DispatchContext';
import customMuiTheme from './customMuiTheme';

let { store, persistor } = configureStore();

export default function Root() {
  const [state, dispatch] = React.useReducer(themeReducer, initialThemeState);
  const { darkMode } = state;
  const theme = React.useMemo(() => {
    return createMuiTheme({
      ...customMuiTheme,
      palette: {
        type: darkMode ? 'dark' : 'light',
        primary: customMuiTheme.palette.primary,
        secondary: customMuiTheme.palette.secondary,
      },
    });
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DispatchContext.Provider value={dispatch}>
        <Provider store={store}>
          <App />
          {/*<PersistGate loading={null} persistor={persistor}>
            <App />
    </PersistGate>*/}
        </Provider>
      </DispatchContext.Provider>
    </ThemeProvider>
  );
}
