import { AppError,EntitySet } from "../common";

export interface CommonState{
  loading:boolean;
  error:Error|ReturnType<AppError["json"]>|null;
}
export const initializeCommonState = ():CommonState => ({loading:false,error:null});
export const initializeEntityState = <T>():EntitySet<T> => ({
  items:[],
  ids:[],
  selected:null,
});
export interface CommonStateWithHistory<T = any> extends CommonState {history:T[];}
export const initializeCommonStateWithHistory = <T>():CommonStateWithHistory<T> => ({
  ...initializeCommonState(),
  history:[],
});

export interface CommonStateWithEntities<T = any> extends CommonState,EntitySet<T> {}
export const initializeCommonStateWithEntities = <T>():CommonStateWithEntities<T> => ({
  ...initializeCommonState(),
  ...initializeEntityState<T>(),
});