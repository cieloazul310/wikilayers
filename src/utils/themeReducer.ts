import * as React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export interface ThemeState {
  darkMode: boolean;
}
export type ThemeAction = { type: 'TOGGLE_DARKMODE' };

export const initialThemeState: ThemeState = {
  darkMode: false,
};

export function useInitialThemeState() {
  const stored: Partial<ThemeState> | null = JSON.parse(localStorage.getItem('wikilayers:ThemeState'));
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return React.useMemo(() => {
    return stored
      ? {
          ...initialThemeState,
          ...stored,
        }
      : {
          ...initialThemeState,
          darkMode: prefersDarkMode ?? initialThemeState.darkMode,
        };
  }, []);
}

export const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      throw new Error();
  }
};
