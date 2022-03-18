import { AppError,EntitySet,Entity } from "../models";

export const initializeEntityState = <T extends Entity>():EntitySet<T> => ({
  items:[],
  ids:[],
  selected:null,
});
export interface CommonState<T extends Entity = Entity> extends Partial<EntitySet<T>> {
  loading:boolean;
  error:ReturnType<AppError["json"]>|null;
  history?:T[];
}
export const initializeCommonState = <T extends Entity = Entity>(history?:boolean,entities?:boolean,):CommonState<T> => ({
  loading:false,
  error:null,
  ...(history?{history:[]}:null),
  ...(entities?initializeEntityState<T>():null),
});