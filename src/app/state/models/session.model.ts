import { DocEntity } from '../types';
import { UserId } from "./user.model";

export type SessionObj = DocEntity & {members:UserId[];duration:number;};
export interface Session extends SessionObj {}
export class Session extends DocEntity {}