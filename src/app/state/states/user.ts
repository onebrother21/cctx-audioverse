import { AppUserJson } from '../models';
import { CommonState,initializeCommonState } from './common';

export interface UserState extends CommonState {me:AppUserJson;}
export const initializeUser = ():UserState => ({...initializeCommonState(),me:null});