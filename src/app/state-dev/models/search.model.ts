import { AppEntity } from '../types';

export type SearchType = "post"|"player"|"game";
export type SearchQuery = {type:SearchType;text:string;};
export type Search = AppEntity & {query:SearchQuery;results:any[];};
