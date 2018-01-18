export const CHANGE_VIEW = 'CHANGE_VIEW';

export function changeView(filter) {
  return {
    type: CHANGE_VIEW,
    filter
  };
}
