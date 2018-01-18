import { fetch } from 'cross-fetch';

export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const SELECT_TITLE = 'SELECT_TITLE';
export const INVALIDATE_TITLE = 'INVALIDATE_TITLE';

export function selectTitle(title) {
  return {
    type: SELECT_TITLE,
    title
  };
}

export function invalidateTitle(title) {
  return {
    type: INVALIDATE_TITLE,
    title
  };
}

function requestTitle(title) {
  return {
    type: REQUEST_ARTICLE,
    title
  };
}

function receiveArticle(title, json) {
  return {
    type: RECEIVE_ARTICLE,
    data: json,
    receivedAt: Date.now(),
    title
  }
}

export function fetchArticle(title) {
  return dispatch => {
    if (title === '') return;

    dispatch(requestTitle(title));

    return fetch(
      `https://ja.wikipedia.org/w/api.php?origin=*&action=query&prop=revisions&rvprop=content&format=json&formatversion=2&titles=${encodeURI(title)}`,
      {
        method: 'GET',
        mode: 'cors'
      }
    )
      .then(response => {
        return response.json();
      })
      .then(json => dispatch(receiveArticle(title, json)))
      .catch(err => console.log(`There has been a problem with your fetch operation: ${err.message}`));
  }
}
