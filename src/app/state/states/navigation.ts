import { RouterReducerState } from '@ngrx/router-store';
import { Entity,AppRoute } from '../models';
import { CommonState,initializeCommonState } from './common';

export type RouterState = RouterReducerState<AppRoute>;
export interface NavigationState extends CommonState<AppRoute & Entity> {requested?:AppRoute;}
export const initializeNavigation = ():NavigationState => ({
  ...initializeCommonState(true),
  requested:null,
});