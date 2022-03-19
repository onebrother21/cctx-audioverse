import { HCLGame } from '../models';
import { CommonState,initializeCommonState } from './common';


export interface HCLGamesState extends CommonState<HCLGame> {
  items:HCLGame[];
  recent?:HCLGame[];
  featured?:HCLGame[];
}
export const initializeHCLGames = ():HCLGamesState => ({
  ...initializeCommonState(),
  //slugs:[],
  items:[],
  recent:[],
  featured:[],
});