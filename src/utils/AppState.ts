import * as React from 'react';
import { FirstQueryPages, Search, PageFeature } from '../types';

type FetchStatus = 'fetching' | 'success' | 'failure' | 'yet';

export interface AppState {
  features: PageFeature[];
  geolocation: boolean;
  fetchStatus: FetchStatus;
  searchedItems: Search[];
  page: FirstQueryPages | null;
}

export type Action =
  | { type: 'TOGGLE_GEOLOCATION' }
  | { type: 'FETCH'; fetchStatus: FetchStatus }
  | { type: 'CLEAR_SEARCHEDITEMS' }
  | { type: 'SET_SEARCHEDITEMS'; items: Search[] }
  | { type: 'SET_PAGE'; page: FirstQueryPages }
  | { type: 'ADD_FEATURE'; feature: PageFeature };

export const initialAppState: AppState = {
  features: [],
  geolocation: false,
  fetchStatus: 'yet',
  page: null,
  searchedItems: [],
};

export function useInitialAppState() {
  const stored: Partial<AppState> | null = JSON.parse(localStorage.getItem('wikilayers:AppState'));
  return React.useMemo(
    () =>
      stored
        ? {
            ...initialAppState,
            ...stored,
          }
        : initialAppState,
    []
  );
}

export const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_GEOLOCATION':
      return {
        ...state,
        geolocation: !state.geolocation,
      };
    case 'FETCH':
      return {
        ...state,
        fetchStatus: action.fetchStatus,
      };
    case 'SET_PAGE':
      return {
        ...state,
        page: action.page,
      };
    case 'CLEAR_SEARCHEDITEMS':
      return {
        ...state,
        searchedItems: [],
      };
    case 'SET_SEARCHEDITEMS':
      return {
        ...state,
        searchedItems: action.items,
      };
    case 'ADD_FEATURE':
      return {
        ...state,
        features: [...state.features, action.feature],
      };
    default:
      throw new Error();
  }
};
