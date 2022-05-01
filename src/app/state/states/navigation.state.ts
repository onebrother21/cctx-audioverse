import { CommonStateWithHistory,initializeCommonStateWithHistory } from "./common.state";
import { AppRoute } from "../common";

export interface NavigationState extends CommonStateWithHistory<AppRoute> {
  page:string;
  requested?:AppRoute;
}
export const initializeNavigation = ():NavigationState => ({
  ...initializeCommonStateWithHistory(),
  page:"",
});