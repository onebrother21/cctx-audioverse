import { CommonStateWithEntities,initializeCommonStateWithEntities } from "./common.state";
import { BusinessJson } from "../models";

export interface BusinessesState extends CommonStateWithEntities<BusinessJson> {latest:BusinessJson[];}
export const initializeBusinesses = ():BusinessesState => ({
  ...initializeCommonStateWithEntities(),
  latest:[],
});