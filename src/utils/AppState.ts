import * as React from 'react';
import { BaseLayer, isBaseLayer } from '../layers/baseLayers';
import { isRecord, isQueryPage, definedProps } from './helpers';
import { pageFeatures, searched, isFetchStatus } from './AppStateHelpers';
import { QueryPage, Search, PageFeature, FetchStatus } from '../types';

export interface AppState {
  features: PageFeature[];
  geolocation: boolean;
  fetchStatus: FetchStatus;
  fetchTitle: string | null;
  searchedItems: Search[];
  page: QueryPage | null;
  baseLayer: BaseLayer;
  alwaysShowLabels: boolean;
}

export type Action =
  | { type: 'TOGGLE_GEOLOCATION' }
  | { type: 'FETCH'; fetchStatus: FetchStatus; fetchTitle?: string }
  | { type: 'CLEAR_SEARCHEDITEMS' }
  | { type: 'SET_SEARCHEDITEMS'; items: Search[] }
  | { type: 'SET_PAGE'; page: QueryPage | null }
  | { type: 'ADD_FEATURE'; feature: PageFeature }
  | { type: 'DELETE_FEATURE'; feature: PageFeature }
  | { type: 'CLEAR_FEATURES' }
  | { type: 'SET_BASELAYER'; layer: BaseLayer }
  | { type: 'TOGGLE_ALWAYSSHOWLABELS' }
  | { type: 'RESET' };

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

function partialAppState(obj: any): Partial<AppState> {
  if (!isRecord(obj)) return {};
  const { features, geolocation, fetchStatus, fetchTitle, page, searchedItems, baseLayer, alwaysShowLabels } = obj;
  return definedProps({
    features: pageFeatures(features) ?? undefined,
    geolocation: typeof geolocation === 'boolean' ? geolocation : undefined,
    fetchStatus: isFetchStatus(fetchStatus) ? fetchStatus : undefined,
    fetchTitle: typeof fetchTitle === 'string' ? fetchTitle : undefined,
    page: isQueryPage(page) ? page : undefined,
    searchedItems: searched(searchedItems) ?? undefined,
    baseLayer: isBaseLayer(baseLayer) ? baseLayer : undefined,
    alwaysShowLabels: typeof alwaysShowLabels === 'boolean' ? alwaysShowLabels : undefined,
  });
}

export function useInitialAppState(): AppState {
  return React.useMemo(
    () => {
      const stored = localStorage.getItem('wikilayers:AppState');
      const storedAppState = stored ? partialAppState(JSON.parse(stored)) : null;
      return storedAppState
        ? {
            ...initialAppState,
            ...storedAppState,
          }
        : initialAppState;
    },
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
    case 'RESET':
      return initialAppState;
    default:
      throw new Error();
  }
}
