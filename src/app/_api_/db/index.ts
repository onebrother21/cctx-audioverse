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
  Upload,
} from '../models';
import * as LAYOUT from "./layout.json";
import * as USERS from "./users.json";
import * as TASKS from "./tasks.json";
import * as INVITES from "./invites.json";
import * as CONTACTUS from "./contact-us.json";
import * as MSGS from "./chat-msgs.json";
import * as SESSIONS from "./sessions.json";
import * as ROOMS from "./rooms.json";
import * as BUSINESSES from "./businesses.json";
import * as UPLOADS from "./uploads.json";

export const initialDb = {
  layouts:(LAYOUT as any).default as Layout[],
  users:(USERS as any).default as User[],
  uploads:(UPLOADS as any).default as Upload[],
  contactUs:(CONTACTUS as any).default as ContactUsMsg[],
  msgs:(MSGS as any).default as ChatMsg[],
  tasks:(TASKS as any).default as Task[],
  invites:(INVITES as any).default as Invite[],
  sessions:(SESSIONS as any).default as Session[],
  rooms:(ROOMS as any).default as Room[],
  businesses:(BUSINESSES as any).default as Business[],
};