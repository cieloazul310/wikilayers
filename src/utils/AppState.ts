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
}

export type Action =
  | { type: 'TOGGLE_GEOLOCATION' }
  | { type: 'FETCH'; fetchStatus: FetchStatus; fetchTitle?: string }
  | { type: 'CLEAR_SEARCHEDITEMS' }
  | { type: 'SET_SEARCHEDITEMS'; items: Search[] }
  | { type: 'SET_PAGE'; page: FirstQueryPages }
  | { type: 'ADD_FEATURE'; feature: PageFeature }
  | { type: 'DELETE_FEATURE'; feature: PageFeature }
  | { type: 'CLEAR_FEATURES' }
  | { type: 'SET_BASELAYER'; layer: BaseLayer };

export const initialAppState: AppState = {
  features: [],
  geolocation: false,
  fetchStatus: 'yet',
  fetchTitle: null,
  page: null,
  searchedItems: [],
  baseLayer: 'vector',
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
    default:
      throw new Error();
  }
};
