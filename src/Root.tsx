import * as React from 'react';
import { ThemeProvider, createMuiTheme, responsiveFontSizes, lighten } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import StartScreen from './components/StartScreen';
import { themeReducer, useInitialThemeState } from './utils/themeReducer';
import { DispatchContext } from './utils/DispatchContext';
import customMuiTheme from './customMuiTheme';

const App = React.lazy(() => import('./App'));

export default function Root(): JSX.Element {
  const initialThemeState = useInitialThemeState();
  const [themeState, themeDispatch] = React.useReducer(themeReducer, initialThemeState);
  const { darkMode } = themeState;

  React.useEffect(() => {
    localStorage.setItem('wikilayers:ThemeState', JSON.stringify(themeState));
  }, [themeState]);

  const theme = React.useMemo(() => {
    return responsiveFontSizes(
      createMuiTheme({
        ...customMuiTheme,
        palette: {
          type: darkMode ? 'dark' : 'light',
          primary: {
            ...customMuiTheme.palette.primary,
            main: darkMode ? lighten(customMuiTheme.palette.primary.main, 0.4) : customMuiTheme.palette.primary.main,
          },
          secondary: {
            ...customMuiTheme.palette.secondary,
            main: darkMode ? lighten(customMuiTheme.palette.secondary.main, 0.4) : customMuiTheme.palette.secondary.main,
          },
        },
      })
    );
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DispatchContext.Provider value={themeDispatch}>
        <React.Suspense fallback={<StartScreen />}>
          <App />
        </React.Suspense>
      </DispatchContext.Provider>
    </ThemeProvider>
  );
}
