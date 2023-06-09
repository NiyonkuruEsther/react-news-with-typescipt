import { Action } from "redux";

export type Item = {
  readonly id: number;
  name: string;
  icon: JSX.Element;
  color: string;
};

export interface ItemWithImage {
  title: string;
  urlToImage: string;
  content: string;
}

export interface StateType {
  status: string;
  error?: null | string;
}

export type ReferenceType = {
  current: object;
};

export type ArticlesType = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: null | string; name: string | null };
  title: string;
  url: string;
  urlToImage: string | null | undefined;
};

export interface FetchPublishersAction extends Action<string> {
  payload: string[];
}
