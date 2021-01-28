export interface Result<T> {
  continue: {
    llcontinue: string;
    continue: string;
  };
  warnings: {
    extracts: {
      warnings: string;
    };
  };
  query: T;
}

export interface Pages {
  pageid: number;
  ns: number;
  title: string;
  missing?: boolean;
}

export interface Search {
  ns: number;
  title: string;
  pageid: string;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}

export interface SearchInfo {
  totalhits: number;
}

export interface FirstQueryPages extends Pages {
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
  pageimage?: string;
  coordinates?: WikiCoordinates[];
  langlinks?: LangLink[];
}

export interface FirstQuery {
  pages: FirstQueryPages[];
  searchinfo: SearchInfo;
  search: Search[];
}

export type FirstQueryResult = Result<FirstQuery>;

export interface WikiCoordinates {
  lat: number;
  lon: number;
  primary: boolean;
  globe: string;
}

export interface LangLink {
  lang: string;
  title: string;
}
