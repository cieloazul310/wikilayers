import * as React from 'react';
import { FirstQueryPages, Article } from '../types';
import { Action } from './AppState';
import ArticleCache from './ArticleCache';

type ArticleStatus = 'exists' | 'yet' | 'failure';

const query = ['api.php?', 'origin=*', '&action=query', '&prop=extracts', '&format=json', '&formatversion=2', '&redirects'].join('');

function createArticleUrl(pageid: number, lang = 'ja') {
  return `https://${lang}.wikipedia.org/w/${query}&pageids=${pageid}`;
}

export function useArticle(page: FirstQueryPages | null, cache: ArticleCache): Article | null {
  const exists = cache.articleExists(page?.pageid ?? null);
  const [articleStatus, setArticleStatus] = React.useState<ArticleStatus>(exists ? 'exists' : 'yet');

  React.useEffect(() => {
    const nextExists = cache.articleExists(page?.pageid ?? null);
    setArticleStatus(nextExists ? 'exists' : 'yet');
  }, [page, cache]);

  if (!page) return null;
  if (page && articleStatus === 'exists') return cache.getArticle(page.pageid);

  if (articleStatus === 'yet') {
    fetch(createArticleUrl(page?.pageid))
      .then((res) => res.json())
      .then((json) => json.query.pages[0])
      .then((article: Article) => {
        cache.setArticle(article);
        setArticleStatus('exists');
      })
      .catch(() => {
        setArticleStatus('failure');
      });
  }

  return null;
}

export async function fetchArticle(
  { pageid }: FirstQueryPages,
  cache: ArticleCache,
  dispatch: React.Dispatch<Action>
): Promise<Article | null> {
  if (cache.articleExists(pageid)) return cache.getArticle(pageid);

  dispatch({ type: 'FETCH', fetchStatus: 'fetching' });

  return fetch(createArticleUrl(pageid))
    .then((res) => res.json())
    .then((json) => json.query.pages[0]);
}
