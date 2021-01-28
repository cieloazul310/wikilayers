import { Feature, Point } from 'geojson';

export interface PageProperties {
  title: string;
  pageid: number;
  extract: string;
}

export type PageFeature = Feature<Point, PageProperties>;
