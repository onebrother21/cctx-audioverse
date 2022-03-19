import { CommonState,initializeCommonState } from "./common.state";
import { Layout } from '../models';

export interface LayoutState extends CommonState,Layout {}
export const initializeLayout = ():LayoutState => ({
  ...initializeCommonState(),
  header:{open:true},
  footer:{open:true,copy:"2022"},
  main:{open:true},
  nav:{},
  pagination:{current:0,total:0},
});