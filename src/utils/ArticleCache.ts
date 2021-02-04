import { Article } from '../types';

type Cache = {
  [key: string]: Article;
};

class ArticleCache {
  cache: Cache;

  constructor() {
    const storaged = window.sessionStorage.getItem('wikilayers:article');
    if (storaged) {
      this.cache = JSON.parse(storaged);
    } else {
      this.cache = {};
    }
  }

  articleExists(pageid: number | null): boolean {
    if (!pageid) return false;
    return Boolean(this.cache[pageid.toString()]);
  }

  setArticle(article: Article): ArticleCache {
    const { pageid } = article;
    this.cache[pageid.toString()] = article;
    this.updateSessionStorage();
    return this;
  }

  getArticle(pageid: number | null): Article | null {
    if (!pageid) return null;
    return this.cache[pageid.toString()];
  }

  updateSessionStorage(): void {
    window.sessionStorage.setItem('wikilayers:article', JSON.stringify(this.cache));
  }
}

export default ArticleCache;
