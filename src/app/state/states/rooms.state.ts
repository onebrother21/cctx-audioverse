import { CommonState,initializeCommonState } from "./common.state";
import { Entity } from "../models";
import { Room } from "../models";

export interface RoomsState extends CommonState<Room & Entity> {latest:Room[];}
export const initializeRooms = ():RoomsState => ({
  ...initializeCommonState(false,true),
  latest:[],
});