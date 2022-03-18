import { CommonState,initializeCommonState } from "@state";
import { QS_Layout } from "../models";

export interface QS_LayoutState extends CommonState,QS_Layout {}
export const initializeLayout = ():QS_LayoutState => ({
  ...initializeCommonState(),
  header:{},
  mobileNav:{},
  footer:{open:true},
  main:{open:true},
  pagination:{},
});