export * from './fetchArticle';
export * from './mapConfigure';
export * from './handleFeature';
export * from './mapToState';
export * from './fetchText';

export const INITIALIZE = 'INITIALIZE';

export function initialize(target) {
  return {
    type: INITIALIZE,
    target
  };
}
