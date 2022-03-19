import { UserType,UserJson,User,UserId } from '../../state/models/user.model';

export type PlayerType = UserType;
export type PlayerJson = UserJson;
export class Player extends User {}
export type PlayerId = UserId;