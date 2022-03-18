import { CommonState,initializeCommonState } from "./common.state";
import { Entity,AppRoute } from "../models";

export interface NavigationState extends CommonState<AppRoute & Entity> {
  page:string;
  requested?:AppRoute;
}
export const initializeNavigation = ():NavigationState => ({
  ...initializeCommonState(true),
  page:"",
});