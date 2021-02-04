import { FirstQueryResult, FirstQueryPages, LangLink, WikiCoordinates } from '../types';
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

function createFirstURL(lang: string, title: string) {
  return `https://${lang}.wikipedia.org/w/${query}&titles=${encodeURI(title)}&srsearch=${encodeURI(title)}`;
}

const langOrder = ['en', 'es', 'de', 'zh', 'ar', 'kr', 'ja'];

async function fetchLangLinksCoordinates(langLinks?: LangLink[]) {
  if (!langLinks || !langLinks.length) return null;
  const tasks: Promise<FirstQueryResult>[] = langLinks
    .filter(({ lang }) => langOrder.indexOf(lang) >= 0)
    .map(({ lang, title }) => fetch(createFirstURL(lang, title)).then((res) => res.json()));

  interface HasCoordinates extends FirstQueryPages {
    coordinates: WikiCoordinates[];
  }

  const coord = await Promise.all(tasks).then((data) => {
    const hasCoordinates = data.map((result) => result.query.pages[0]).filter((page): page is HasCoordinates => Boolean(page.coordinates));
    if (hasCoordinates.length) return hasCoordinates[0].coordinates;
    return null;
  });
  return coord;
}

async function fetchPages(title: string, dispatch: React.Dispatch<Action>): Promise<void> {
  if (title === '') return;
  dispatch({ type: 'FETCH', fetchStatus: 'fetching', fetchTitle: title });
  dispatch({ type: 'CLEAR_SEARCHEDITEMS' });

  try {
    const result: FirstQueryResult = await fetch(createFirstURL('ja', title)).then((res) => res.json());
    const page = result.query.pages[0];
    const { search } = result.query;
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

export default fetchPages;
