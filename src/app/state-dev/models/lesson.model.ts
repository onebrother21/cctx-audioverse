import { DocEntity, Status } from '../types';
import { PlayerId } from './player.model';

export enum LessonStatuses {
  N = "new",
  S = "started",
  P = "paused",
  A = "active",
  C = "completed",
  E = "expired",}
export interface Lesson extends DocEntity {
  tutor:PlayerId;
  tutee:PlayerId;
  desc:string;
  rating?:number;
  status:Status<LessonStatuses>[];}
export class Lesson extends DocEntity {}