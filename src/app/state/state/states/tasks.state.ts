import { CommonState,initializeCommonState,Entity } from "@state";
import { QS_Task } from "../models";

export interface QS_TasksState extends CommonState<QS_Task & Entity> {latest:QS_Task[];}
export const initializeTasks = ():QS_TasksState => ({
  ...initializeCommonState(false,true),
  latest:[],
});