import { CommonState,initializeCommonState,Entity } from "@state";
import { Task } from "../models";

export interface TasksState extends CommonState<Task & Entity> {latest:Task[];}
export const initializeTasks = ():TasksState => ({
  ...initializeCommonState(false,true),
  latest:[],
});