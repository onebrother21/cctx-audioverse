import { CommonState,initializeCommonState } from "./common.state";
import { Entity } from "../models";
import { Layout } from "../models";

export interface LayoutState extends CommonState,Layout {}
export const initializeLayout = ():LayoutState => ({
  ...initializeCommonState(),
  header:{},
  mobileNav:{},
  footer:{open:true},
  main:{open:true},
  pagination:{},
});