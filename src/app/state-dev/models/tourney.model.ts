import { DocEntity, Status } from '../types';
import { PlayerId } from './player.model';
import { Game } from './game.model';
import { FeaturedTags, FeatureTag } from './content.model';

export enum TourneyStatuses {
  N = "new",
  S = "started",
  P = "paused",
  A = "active",
  C = "completed",
  E = "expired",}
export interface Tourney extends DocEntity {
  slug?:string;
  type:"standard";
  games:Game[];
  players:PlayerId[];
  winner:PlayerId;
  status:Status<TourneyStatuses>[];
  featured?:boolean;
  promo:(FeaturedTags|FeatureTag)[];
}
export class Tourney extends DocEntity {}