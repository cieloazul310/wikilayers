import { FirstQueryResult } from '../types';
import { Action } from './AppState';

const query = [
  'api.php?',
  'origin=*',
  '&action=query',
  '&prop=extracts|pageimages|coordinates|langlinks',
  '&exintro&explaintext',
  '&pithumbsize=200',
  '&coprimary=all',
  '&list=search',
  '&format=json',
  '&formatversion=2',
  '&redirects',
].join('');

export async function fetchPages(title: string, dispatch: React.Dispatch<Action>) {
  if (title === '') return;
  dispatch({ type: 'FETCH', fetchStatus: 'fetching' });
  dispatch({ type: 'CLEAR_SEARCHEDITEMS' });

  try {
    const result: FirstQueryResult = await fetch(createFirstURL('ja', title)).then((res) => res.json());
    const page = result.query.pages[0];
    const search = result.query.search;
    console.log(page, search);
    if (page.missing) {
      dispatch({ type: 'SET_SEARCHEDITEMS', items: search });
      dispatch({ type: 'FETCH', fetchStatus: 'success' });
    } else {
      dispatch({ type: 'SET_PAGE', page });
      if (!page.coordinates) {
        
      } else {
        dispatch({ type: 'FETCH', fetchStatus: 'success' });
      }
    }
  } catch (err) {
    dispatch({ type: 'FETCH', fetchStatus: 'failure' });
  }
}

function createFirstURL(lang: string, title: string) {
  return `https://${lang}.wikipedia.org/w/${query}&titles=${encodeURI(title)}&srsearch=${encodeURI(title)}`;
}