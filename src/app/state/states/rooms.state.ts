import { CommonState,initializeCommonState } from "./common.state";
import { Room } from "../models";

export interface RoomsState extends CommonState<Room> {latest:Room[];}
export const initializeRooms = ():RoomsState => ({
  ...initializeCommonState(false,true),
  latest:[],
});