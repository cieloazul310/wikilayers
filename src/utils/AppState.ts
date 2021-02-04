import * as React from 'react';
import { BaseLayer } from '../layers/baseLayers';
import { FirstQueryPages, Search, PageFeature } from '../types';

type FetchStatus = 'fetching' | 'success' | 'failure' | 'yet';

export interface AppState {
  features: PageFeature[];
  geolocation: boolean;
  fetchStatus: FetchStatus;
  fetchTitle: string | null;
  searchedItems: Search[];
  page: FirstQueryPages | null;
  baseLayer: BaseLayer;
  alwaysShowLabels: boolean;
}

export type Action =
  | { type: 'TOGGLE_GEOLOCATION' }
  | { type: 'FETCH'; fetchStatus: FetchStatus; fetchTitle?: string }
  | { type: 'CLEAR_SEARCHEDITEMS' }
  | { type: 'SET_SEARCHEDITEMS'; items: Search[] }
  | { type: 'SET_PAGE'; page: FirstQueryPages | null }
  | { type: 'ADD_FEATURE'; feature: PageFeature }
  | { type: 'DELETE_FEATURE'; feature: PageFeature }
  | { type: 'CLEAR_FEATURES' }
  | { type: 'SET_BASELAYER'; layer: BaseLayer }
  | { type: 'TOGGLE_ALWAYSSHOWLABELS' };

export const initialAppState: AppState = {
  features: [],
  geolocation: false,
  fetchStatus: 'yet',
  fetchTitle: null,
  page: null,
  searchedItems: [],
  baseLayer: 'vector',
  alwaysShowLabels: false,
};

export function useInitialAppState(): AppState {
  const stored = localStorage.getItem('wikilayers:AppState');
  const storedAppState: Partial<AppState> | null = stored ? JSON.parse(stored) : null;
  return React.useMemo(
    () =>
      stored
        ? {
            ...initialAppState,
            ...storedAppState,
          }
        : initialAppState,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
}

export function reducer(state: AppState, action: Action): AppState {
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
        fetchTitle: action.fetchTitle ?? state.fetchTitle,
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
    case 'DELETE_FEATURE':
      return {
        ...state,
        features: state.features.filter((feature) => feature.page.title !== action.feature.page.title),
      };
    case 'CLEAR_FEATURES':
      return {
        ...state,
        features: [],
      };
    case 'SET_BASELAYER':
      return {
        ...state,
        baseLayer: action.layer,
      };
    case 'TOGGLE_ALWAYSSHOWLABELS':
      return {
        ...state,
        alwaysShowLabels: !state.alwaysShowLabels,
      };
    default:
      throw new Error();
  }
}
