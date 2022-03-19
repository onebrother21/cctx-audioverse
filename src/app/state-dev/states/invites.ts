import { HCLInvite } from '../models';
import { CommonState,initializeCommonState } from './common';

export interface HCLInvitesState extends CommonState<HCLInvite> {
  slugs:string[];
  recent?:HCLInvite[];
  featured?:HCLInvite[];
}
export const initializeHCLInvites = ():HCLInvitesState => ({
  ...initializeCommonState(false,true),
  slugs:[],
  recent:[],
  featured:[],
});