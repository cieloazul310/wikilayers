import { FirstQueryResult, LangLink } from '../types';
import { Action } from './AppState';

const query = [
  'api.php?',
  'origin=*',
  '&action=query',
  '&prop=extracts|pageimages|coordinates|langlinks|description',
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
  dispatch({ type: 'FETCH', fetchStatus: 'fetching', fetchTitle: title });
  dispatch({ type: 'CLEAR_SEARCHEDITEMS' });

  try {
    const result: FirstQueryResult = await fetch(createFirstURL('ja', title)).then((res) => res.json());
    const page = result.query.pages[0];
    const search = result.query.search;
    console.log(page, search);
    if (page.missing || page.description === 'ウィキメディアの曖昧さ回避ページ' || page.description === '曖昧さ回避ページ') {
      dispatch({ type: 'SET_PAGE', page: null });
      dispatch({ type: 'SET_SEARCHEDITEMS', items: search });
      dispatch({ type: 'FETCH', fetchStatus: 'success' });
    } else {
      dispatch({ type: 'SET_PAGE', page });
      if (!page.coordinates) {
        const coordinates = await fetchLangLinksCoordinates(page.langlinks);
        dispatch({ type: 'FETCH', fetchStatus: 'success' });
        if (coordinates) {
          dispatch({ type: 'SET_PAGE', page: { ...page, coordinates } });
        }
      } else {
        dispatch({ type: 'FETCH', fetchStatus: 'success' });
      }
    }
  } catch (err) {
    dispatch({ type: 'FETCH', fetchStatus: 'failure' });
  }
}

const langOrder = ['en', 'es', 'de', 'zh', 'ar', 'kr', 'ja'];

async function fetchLangLinksCoordinates(langLinks?: LangLink[]) {
  if (!langLinks || !langLinks.length) return null;
  const tasks: Promise<FirstQueryResult>[] = langLinks
    .filter(({ lang }) => langOrder.indexOf(lang) >= 0)
    .sort((a, b) => langOrder.indexOf(a.lang) - langOrder.indexOf(b.lang))
    .map(({ lang, title }) => fetch(createFirstURL(lang, title)).then((res) => res.json()));
  
  for await (const task of tasks) {
    const result = await task;
    if (result.query.pages[0].coordinates) return result.query.pages[0].coordinates;
  }
  return null;
}

function createFirstURL(lang: string, title: string) {
  return `https://${lang}.wikipedia.org/w/${query}&titles=${encodeURI(title)}&srsearch=${encodeURI(title)}`;
}
