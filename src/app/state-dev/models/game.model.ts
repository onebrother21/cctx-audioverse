import { DocEntity, Status } from '../types';
import { PlayerId } from './player.model';

export enum GameStatuses {
  N = "new",
  S = "started",
  P = "paused",
  A = "active",
  C = "completed",
  E = "expired",}
export type GameOutcomes = "checkmate"|"stalemate"|"resigned";
export interface Game extends DocEntity {
  type:"standard";
  players:[PlayerId,PlayerId];
  outcome:GameOutcomes;
  winner:PlayerId;
  status:Status<GameStatuses>[];
  featured?:boolean;
}
export class Game extends DocEntity {}