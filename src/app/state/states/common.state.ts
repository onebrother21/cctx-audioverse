import { AppError,EntitySet } from "../types";

export const initializeEntityState = <T>():EntitySet<T> => ({
  items:[],
  ids:[],
  selected:null,
});
export interface CommonState<T = any> extends Partial<EntitySet<T>> {
  loading:boolean;
  error:ReturnType<AppError["json"]>|null;
  history?:T[];
}
export const initializeCommonState = <T>(history?:boolean,entities?:boolean,):CommonState<T> => ({
  loading:false,
  error:null,
  ...(history?{history:[]}:null),
  ...(entities?initializeEntityState<T>():null),
});