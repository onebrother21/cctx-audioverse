import { AppEntity, AppError,EntitySet } from "../common";

export interface CommonState{
  loading:boolean;
  error:Error|ReturnType<AppError["json"]>|null;
}
export interface CommonStateWithHistory<T = any> extends CommonState {history:T[];}
export type CommonStateWithEntity<T> = T & CommonState;
export interface CommonStateWithEntities<T = any> extends CommonState,EntitySet<T> {}

export const initializeCommonState = ():CommonState => ({loading:false,error:null});
export const initializeHistoryState = <T>():{history:T[];} => ({history:[]});
export const initializeEntityState = ():AppEntity => new AppEntity({});
export const initializeEntitiesState = <T>():EntitySet<T> => ({items:[],ids:[],selected:null,});
export const initializeCommonStateWithEntity = <T>():CommonStateWithEntity<T> => initializeCommonState() as CommonStateWithEntity<T>;
export const initializeCommonStateWithHistory = <T>():CommonStateWithHistory<T> => ({
  ...initializeCommonState(),
  ...initializeHistoryState<T>(),
  
});
export const initializeCommonStateWithEntities = <T>():CommonStateWithEntities<T> => ({
  ...initializeCommonState(),
  ...initializeEntitiesState<T>(),
});