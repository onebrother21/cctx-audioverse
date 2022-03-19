import { HCLPlayerJson } from '../models';
import { CommonState,initializeCommonState } from './common';

export interface HCLPlayersState extends CommonState<HCLPlayerJson> {
  usernames:string[];
  recent?:HCLPlayerJson[];
  featured?:HCLPlayerJson[];
}
export const initializeHCLPlayers = ():HCLPlayersState => ({
  ...initializeCommonState(false,true),
  usernames:[],
  recent:[],
  featured:[],
});