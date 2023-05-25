export type Item = {
  readonly id: number;
  name: string;
  icon: JSX.Element;
  color: String;
};

export interface ItemWithImage {
  title: string;
  urlToImage: string;
  content: string;
}

export interface StateType {
  status: string;
  error: null;
}

export type ReferenceType = {
  current: any;
};

export interface ArticlesType {
  source: { id: null | string; name: string };
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
}
