import { AuthStatus } from '../models';
import { CommonState,initializeCommonState } from './common';

export interface AuthState extends CommonState {status:AuthStatus;}
export const initializeAuth = ():AuthState => ({...initializeCommonState(),status:null});