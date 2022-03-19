import { CommonStateWithEntities,initializeCommonStateWithEntities } from "./common.state";
import { Task } from "../models";

export interface TasksState extends CommonStateWithEntities<Task> {latest:Task[];}
export const initializeTasks = ():TasksState => ({
  ...initializeCommonStateWithEntities(),
  latest:[],
});