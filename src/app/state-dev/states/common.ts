import { AppError } from '@onebro/ob-common';
import { EntitySet, Entity } from '../models';

export const initializeEntityState = <T extends Entity>():EntitySet<T> => ({
  items:[],
  ids:[],
  selected:null,
});
export interface CommonState<T extends Entity = Entity> extends Partial<EntitySet<T>> {
  loading:boolean;
  error:ReturnType<AppError["json"]>;
  history?:T[];
}
export const initializeCommonState = <T extends Entity = Entity>(
  withHistory?:boolean,
  withEntities?:boolean,):CommonState<T> => ({
  loading:false,
  error:null,
  ...(withHistory?{history:[]}:null),
  ...(withEntities?initializeEntityState<T>():null),
});