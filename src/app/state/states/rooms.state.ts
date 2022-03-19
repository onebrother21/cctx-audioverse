import { CommonStateWithEntities,initializeCommonStateWithEntities } from "./common.state";
import { Room } from "../models";

export interface RoomsState extends CommonStateWithEntities<Room> {latest:Room[];}
export const initializeRooms = ():RoomsState => ({
  ...initializeCommonStateWithEntities(),
  latest:[],
});