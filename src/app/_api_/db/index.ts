import { 
  AppLayout,
  Player,
  Game,
  Tourney,
  Invite,
  Lesson,
  Post,
  Content,
  AuthAcct,
  AppUserProfile, } from '@state';

import * as LAYOUT from "./layout.json";
import * as CONTENT from "./content.json";
import * as ACCTS from "./users.json";
import * as PROFILES from "./profiles.json";
import * as POSTS from "./posts.json";
import * as INVITES from "./invites.json";
import * as TEST from "./test.json";
import * as RECENT from "./recent.json";
import { load } from '../utils';

let layout = (load('hcl-layout') || (LAYOUT as any).default) as AppLayout;
let content = (load('hcl-content') || (CONTENT as any).default) as Content;
let users = (load('hcl-users') || (ACCTS as any).default) as AuthAcct[];
let profiles = (load('hcl-profiles') || (PROFILES as any).default) as AppUserProfile[];
let posts = (load('hcl-posts') || (POSTS as any).default) as Post[];
let recent = (load('hcl-recent') || (RECENT as any).default) as (Post|Game)[];
let invites = (load('hcl-invites') || (INVITES as any).default) as Invite[];
let players = (load('hcl-players') || (PROFILES as any).default) as AppUserProfile[];
let games = (load('hcl-games') || (TEST as any).default) as Game[];
let tourneys = (load('hcl-tourneys') || (TEST as any).default) as Tourney[];
let lessons = (load('hcl-lessons') || (TEST as any).default) as Lesson[];

export const db = {layout,content,users,profiles,players,games,tourneys,invites,lessons,posts,recent};
