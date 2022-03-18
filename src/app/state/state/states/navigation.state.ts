import { CommonState,initializeCommonState,Entity,AppRoute } from "@state";

export interface QS_NavigationState extends CommonState<AppRoute & Entity> {
  baseref:string;
  page:string;
  requested?:AppRoute;
}
export const initializeNavigation = ():QS_NavigationState => ({
  ...initializeCommonState(true),
  baseref:"/qs",
  page:"",
});