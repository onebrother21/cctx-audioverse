import { CommonState,initializeCommonState } from "./common.state";
import { Entity } from "../models";
import { Task } from "../models";

export interface TasksState extends CommonState<Task & Entity> {latest:Task[];}
export const initializeTasks = ():TasksState => ({
  ...initializeCommonState(false,true),
  latest:[],
});