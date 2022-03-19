import { HCLLesson } from '../models';
import { CommonState,initializeCommonState } from './common';

export interface HCLLessonsState extends CommonState<HCLLesson> {
  slugs:string[];
  recent?:HCLLesson[];
  featured?:HCLLesson[];
}
export const initializeHCLLessons = ():HCLLessonsState => ({
  ...initializeCommonState(false,true),
  slugs:[],
  recent:[],
  featured:[],
});