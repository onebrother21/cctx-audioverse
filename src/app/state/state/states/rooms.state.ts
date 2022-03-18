import { CommonState,initializeCommonState,Entity } from "@state";
import { QS_Room } from "../models";

export interface QS_RoomsState extends CommonState<QS_Room & Entity> {latest:QS_Room[];}
export const initializeRooms = ():QS_RoomsState => ({
  ...initializeCommonState(false,true),
  latest:[],
});
//export * from "./rooms-db";