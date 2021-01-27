import * as React from 'react';

import { ThemeAction } from './themeReducer';

export const DispatchContext = React.createContext<React.Dispatch<ThemeAction>>(() => {
  throw new Error();
});

// カスタムフックの作成
export function useToggleDarkMode() {
  const dispatch = React.useContext(DispatchContext);
  return React.useCallback(() => dispatch({ type: 'TOGGLE_DARKMODE' }), [dispatch]);
}
