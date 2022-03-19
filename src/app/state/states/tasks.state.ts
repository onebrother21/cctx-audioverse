import { CommonState,initializeCommonState } from "./common.state";
import { Task } from "../models";

export interface TasksState extends CommonState<Task> {latest:Task[];}
export const initializeTasks = ():TasksState => ({
  ...initializeCommonState(false,true),
  latest:[],
});