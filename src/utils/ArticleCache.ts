import { Article } from '../types';

type Cache = {
  [key: string]: Article;
};

export class ArticleCache {
  cache: Cache;
  constructor() {
    const storaged = window.sessionStorage.getItem('wikilayers:article');
    if (storaged) {
      this.cache = JSON.parse(storaged);
    } else {
      this.cache = {};
    }
  }

  articleExists(pageid: number | null) {
    if (!pageid) return null;
    return Boolean(this.cache[pageid.toString()]);
  }

  setArticle(article: Article) {
    const { pageid } = article;
    this.cache[pageid.toString()] = article;
    this.updateSessionStorage();
    return this;
  }

  getArticle(pageid: number | null) {
    if (!pageid) return null;
    return this.cache[pageid.toString()];
  }

  updateSessionStorage() {
    window.sessionStorage.setItem('wikilayers:article', JSON.stringify(this.cache));
  }
}
