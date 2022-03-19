import { AppAlert } from '../models';
import { CommonState,initializeCommonState } from './common';

export interface AlertsState extends CommonState<AppAlert> {
  alert:AppAlert;
  keepAfterNav:boolean;
}
export const initializeAlerts = ():AlertsState => ({
  ...initializeCommonState(true),
  alert:null,
  keepAfterNav:false,
});