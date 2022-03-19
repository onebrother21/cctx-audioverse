import { Entity,AppSearch,SearchQuery } from '../models';
import { CommonState,initializeCommonState } from './common';

export interface SearchState extends CommonState<AppSearch>,AppSearch {}
export const initializeSearch = ():SearchState => ({
  ...initializeCommonState(true),
  ...new Entity({}),
  query:null,
  results:[],
});