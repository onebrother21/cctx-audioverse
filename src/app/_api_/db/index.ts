import { MockApiDBHelpers as DB } from '../utils';
import { 
  LayoutContent,
  User,
  Task,
  ContactUsMsg,
  ChatMsg,
  Session,
  Room,
  Invite,
  Business,
  Upload,
} from '../models';
import * as LAYOUT from "./layout-content.json";
import * as USERS from "./users.json";
import * as TASKS from "./tasks.json";
import * as INVITES from "./invites.json";
import * as CONTACTUS from "./contact-us.json";
import * as MSGS from "./chat-msgs.json";
import * as SESSIONS from "./sessions.json";
import * as ROOMS from "./rooms.json";
import * as BUSINESSES from "./businesses.json";
import * as UPLOADS from "./uploads.json";

export const db = {
  layoutContent:(DB.load('qs-layout-content') || (LAYOUT as any).default) as LayoutContent,
  users:((DB.load('qs-users') || (USERS as any).default) as User[]).map(o => new User(o)),
  uploads:((DB.load("qs-uploads") || (UPLOADS as any).default) as Upload[]).map(o => new Upload(o)),
  contactUs:((DB.load('qs-contact-us') || (CONTACTUS as any).default) as ContactUsMsg[]).map(o => new ContactUsMsg(o)),
  msgs:((DB.load('qs-msgs') || (MSGS as any).default) as ChatMsg[]).map(o => new ChatMsg(o)),
  tasks:((DB.load('qs-tasks') || (TASKS as any).default) as Task[]).map(o => new Task(o)),
  invites:((DB.load('qs-invites') || (INVITES as any).default) as Invite[]).map(o => new Invite(o)),
  sessions:((DB.load('qs-sessions') || (SESSIONS as any).default) as Session[]).map(o => new Session(o)),
  rooms:((DB.load('qs-rooms') || (ROOMS as any).default) as Room[]).map(o => new Room(o)),
  businesses:((DB.load("qs-businesses") || (BUSINESSES as any).default) as Business[]).map(o => new Business(o)),
};
