
export interface AppState {
  fetchState: 'fetching' | 'success' | 'failure' | 'exising';
}

export type Action = { type: string };

export const initialAppState = {

}

export const themeReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return {
        ...state,
      };
    default:
      throw new Error();
  }
};