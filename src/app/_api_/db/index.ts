import { load } from '../utils';
import { 
  Layout,
  User,
  Task,
  ContactUsMsg,
  ChatMsg,
  Session,
  Room,
  Invite
} from '@state';
import * as LAYOUT from "./layout.json";
import * as USERS from "./users.json";
import * as TASKS from "./tasks.json";
import * as INVITES from "./invites.json";
import * as CONTACTUS from "./contact-us.json";
import * as MSGS from "./msgs.json";
import * as SESSIONS from "./sessions.json";
import * as ROOMS from "./rooms.json";

const layout = (load('qs-layout') || (LAYOUT as any).default) as Layout;
const users = ((load('qs-users') || (USERS as any).default) as User[]).map(o => new User(o));
const tasks = (load('qs-tasks') || (TASKS as any).default) as Task[];
const contactUs = (load('qs-contact-us') || (CONTACTUS as any).default) as ContactUsMsg[];
const msgs = (load('qs-msgs') || (MSGS as any).default) as ChatMsg[];
const invites = (load('qs-invites') || (INVITES as any).default) as Invite[];
const sessions = (load('qs-sessions') || (SESSIONS as any).default) as Session[];
const rooms = (load('qs-rooms') || (ROOMS as any).default) as Room[];

export const db = {
  layout,
  users,
  tasks,
  contactUs,
  msgs,
  sessions,
  rooms,
  invites,
};
