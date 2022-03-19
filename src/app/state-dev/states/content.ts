import { HCLContent } from '../models';
import { 
  CommonState,
  initializeCommonState,
  initializeEntityState } from './common';

export interface HCLContentState extends CommonState,HCLContent {}
export const initializeContent = ():HCLContentState => ({
  ...initializeCommonState(),
  blog:{},
  sharing:{},
  about:{},
  tags:[],
  board:{},
  leaders:{
    wins:[],
    winRate:[],
    rank:[],
    gp:[],
    rankChg:[],
  },
  kudos:{
    pow:[],
    pom:[],
    miw:[],
    mim:[],
  },
  stats:{
    gp:0,
    avgWinRate:0,
    avgGameTime:0,
  }
});