import { load } from '../utils';
import { 
  Layout,
  AuthAcct,
  User,
  Task,
  ContactUsMsg,
  ChatMsg,
  Session,
  Room,
  Invite
} from '@state';
import * as LAYOUT from "./layout.json";
import * as AUTH from "./auth.json";
import * as USERS from "./users.json";
import * as TASKS from "./tasks.json";
import * as INVITES from "./invites.json";
import * as CONTACTUS from "./contact-us.json";
import * as MSGS from "./msgs.json";
import * as SESSIONS from "./sessions.json";
import * as ROOMS from "./rooms.json";


const layout = (load('qs-layout') || (LAYOUT as any).default) as Layout;
const auth = (load('qs-auth') || (AUTH as any).default) as AuthAcct[];
const users = (load('qs-users') || (USERS as any).default) as User[];
const tasks = (load('qs-tasks') || (TASKS as any).default) as Task[];
const contactUs = (load('qs-contact-us') || (CONTACTUS as any).default) as ContactUsMsg[];
const msgs = (load('qs-msgs') || (MSGS as any).default) as ChatMsg[];
const invites = (load('qs-invites') || (INVITES as any).default) as Invite[];
const sessions = (load('qs-sessions') || (SESSIONS as any).default) as Session[];
const rooms = (load('qs-rooms') || (ROOMS as any).default) as Room[];

export const db = {
  layout,
  auth,
  users,
  tasks,
  contactUs,
  msgs,
  sessions,
  rooms,
  invites,
};


/*
import * as CONTENT from "./content.json";
import * as POSTS from "./posts.json";
import * as INVITES from "./invites.json";
import * as TEST from "./test.json";
import * as RECENT from "./recent.json";

const content = (load('qs-content') || (CONTENT as any).default) as Content;
let posts = (load('qs-posts') || (POSTS as any).default) as Post[];
let recent = (load('qs-recent') || (RECENT as any).default) as (Post|Game)[];
let invites = (load('qs-invites') || (INVITES as any).default) as Invite[];
let players = (load('qs-players') || (PROFILES as any).default) as UserProfile[];
let games = (load('qs-games') || (TEST as any).default) as Game[];
let tourneys = (load('qs-tourneys') || (TEST as any).default) as Tourney[];
let lessons = (load('qs-lessons') || (TEST as any).default) as Lesson[];
*/

