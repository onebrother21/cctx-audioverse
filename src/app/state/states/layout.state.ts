import { CommonState,initializeCommonState } from "@state";
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