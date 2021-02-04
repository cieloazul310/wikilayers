import * as React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export interface ThemeState {
  darkMode: boolean;
}
export type ThemeAction = { type: 'TOGGLE_DARKMODE' };

export const initialThemeState: ThemeState = {
  darkMode: false,
};

export function useInitialThemeState(): ThemeState {
  const stored = localStorage.getItem('wikilayers:ThemeState');
  const storedThemeState: Partial<ThemeState> | null = stored ? JSON.parse(stored) : null;
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return React.useMemo(() => {
    return stored
      ? {
          ...initialThemeState,
          ...storedThemeState,
        }
      : {
          ...initialThemeState,
          darkMode: prefersDarkMode ?? initialThemeState.darkMode,
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      throw new Error();
  }
}
