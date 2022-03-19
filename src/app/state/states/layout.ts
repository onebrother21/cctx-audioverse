import { AppLayout } from '../models';
import { CommonState,initializeCommonState } from './common';

export interface LayoutState extends CommonState,AppLayout {}
export const initializeLayout = ():LayoutState => ({
  ...initializeCommonState(),
  header:{},
  sidebar:{},
  footer:{open:true},
  main:{open:true},
  pagination:{},
});