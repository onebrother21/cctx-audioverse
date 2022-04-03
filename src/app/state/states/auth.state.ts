import { User, UserJson } from "../models";
import { CommonState,initializeCommonState } from "./common.state";

export interface AuthenticationState extends CommonState,Pick<UserJson,"token"> {
  exists?:Record<string,boolean>;
}
export const initializeAuth = ():AuthenticationState => initializeCommonState();