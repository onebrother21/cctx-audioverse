import { CommonStateWithEntities,initializeCommonStateWithEntities } from "./common.state";
import { UserJson } from "../models";

export interface UsersState extends CommonStateWithEntities<UserJson> {latest:UserJson[];exists?:boolean;}
export const initializeUsers = ():UsersState => ({
  ...initializeCommonStateWithEntities(),
  latest:[],
});