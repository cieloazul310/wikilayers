import { isRecord, isQueryPage, hasCoords } from './helpers';
import { Search, PageFeature, FetchStatus } from '../types';

export function isPageFeature(feature: any): feature is PageFeature {
  if (!isRecord(feature)) return false;
  const { title, page } = feature;
  return typeof title === 'string' && isQueryPage(page) && hasCoords(page);
}
export function pageFeatures(features: any): PageFeature[] | null {
  if (!Array.isArray(features)) return null;
  return features.filter(isPageFeature);
}

export function isSearchedItem(search: any): search is Search {
  if (!isRecord(search)) return false;
  const { size, title, pageid } = search;
  return typeof size === 'number' && typeof title === 'string';
}

export function searched(searchedItems: any): Search[] | null {
  if (!Array.isArray(searchedItems)) return null;
  return searchedItems.filter(isSearchedItem);
}

export function isFetchStatus(str: any): str is FetchStatus {
  if (typeof str !== 'string') return false;
  return str === 'fetching' || str === 'success' || str === 'failure' || str === 'yet';
}
