import { CommonState,initializeCommonState,Entity } from "@state";
import { QS_ContactUsMsg } from "../models";

export interface QS_ContactUsState extends CommonState<QS_ContactUsMsg & Entity> {latest:QS_ContactUsMsg[];}
export const initializeContactUs = ():QS_ContactUsState => ({
  ...initializeCommonState(false,true),
  latest:[],
});