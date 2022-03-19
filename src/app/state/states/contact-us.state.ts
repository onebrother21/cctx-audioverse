import { CommonState,initializeCommonState } from "./common.state";
import { ContactUsMsg } from "../models";

export interface ContactUsState extends CommonState<ContactUsMsg> {latest:ContactUsMsg[];}
export const initializeContactUs = ():ContactUsState => ({
  ...initializeCommonState(false,true),
  latest:[],
});