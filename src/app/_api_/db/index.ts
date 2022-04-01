import { load } from '../utils';
import { 
  Layout,
  User,
  Task,
  ContactUsMsg,
  ChatMsg,
  Session,
  Room,
  Invite,
  Business,
} from '@state';
import * as LAYOUT from "./layout.json";
import * as USERS from "./users.json";
import * as TASKS from "./tasks.json";
import * as INVITES from "./invites.json";
import * as CONTACTUS from "./contact-us.json";
import * as MSGS from "./msgs.json";
import * as SESSIONS from "./sessions.json";
import * as ROOMS from "./rooms.json";
import * as BUSINESSES from "./businesses.json";

const layout = (load('qs-layout') || (LAYOUT as any).default) as Layout;
const users = ((load('qs-users') || (USERS as any).default) as User[]).map(o => new User(o));
const tasks = ((load('qs-tasks') || (TASKS as any).default) as Task[]).map(o => new Task(o));
const contactUs = ((load('qs-contact-us') || (CONTACTUS as any).default) as ContactUsMsg[]).map(o => new ContactUsMsg(o));
const msgs = ((load('qs-msgs') || (MSGS as any).default) as ChatMsg[]).map(o => new ChatMsg(o));
const invites = ((load('qs-invites') || (INVITES as any).default) as Invite[]).map(o => new Invite(o));
const sessions = ((load('qs-sessions') || (SESSIONS as any).default) as Session[]).map(o => new Session(o));
const rooms = ((load('qs-rooms') || (ROOMS as any).default) as Room[]).map(o => new Room(o));
const businesses = ((load("qs-businesses") || (BUSINESSES as any).default) as Business[]).map(o => new Business(o));

export const db = {
  layout,
  users,
  tasks,
  contactUs,
  msgs,
  sessions,
  rooms,
  invites,
  businesses,
};
