import { HCLTourney, } from '../models';
import { CommonState,initializeCommonState } from './common';

export interface HCLTourneysState extends CommonState<HCLTourney> {
  slugs:string[];
  recent?:HCLTourney[];
  featured?:HCLTourney[];
}
export const initializeHCLTourneys = ():HCLTourneysState => ({
  ...initializeCommonState(false,true),
  slugs:[],
  recent:[],
  featured:[],
});