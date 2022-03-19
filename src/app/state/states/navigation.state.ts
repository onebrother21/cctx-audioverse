import { CommonState,initializeCommonState } from "./common.state";
import { AppRoute } from "../models";

export interface NavigationState extends CommonState<AppRoute> {
  page:string;
  requested?:AppRoute;
}
export const initializeNavigation = ():NavigationState => ({
  ...initializeCommonState(true),
  page:"",
});