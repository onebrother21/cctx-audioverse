import { CommonState,initializeCommonState,Entity,AppRoute } from "@state";

export interface NavigationState extends CommonState<AppRoute & Entity> {
  baseref:string;
  page:string;
  requested?:AppRoute;
}
export const initializeNavigation = ():NavigationState => ({
  ...initializeCommonState(true),
  baseref:"/qs",
  page:"",
});