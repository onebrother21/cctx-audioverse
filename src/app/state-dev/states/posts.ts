import { HCLPost, } from '../models';
import { CommonState,initializeCommonState } from './common';

export interface HCLPostsState extends CommonState<HCLPost> {
  slugs:string[];
  recent?:HCLPost[];
  featured?:HCLPost[];
}
export const initializeHCLPosts = ():HCLPostsState => ({
  ...initializeCommonState(false,true),
  slugs:[],
  recent:[],
  featured:[],
});