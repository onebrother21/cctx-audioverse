import { QS_LayoutState } from './layout.state';
import { QS_NavigationState } from './navigation.state';
import { QS_AuthenticationState } from './auth.state';
import { QS_MeState } from './me.state';
import { QS_UsersState } from './users.state';
import { QS_SessionsState } from './sessions.state';
import { QS_RoomsState } from './rooms.state';
import { QS_ChatMessagesState } from './chat-msgs.state';
import { QS_ContactUsState } from './contact-us.state';
import { QS_TasksState } from "./tasks.state";

export interface QS_State {
  layout:QS_LayoutState;
  navigation:QS_NavigationState;
  auth:QS_AuthenticationState;
  me:QS_MeState;
  users:QS_UsersState;
  sessions:QS_SessionsState;
  rooms:QS_RoomsState; 
  msgs:QS_ChatMessagesState;
  contactUs:QS_ContactUsState;
  tasks:QS_TasksState;
}

export * from "./layout.state";
export * from "./navigation.state";
export * from "./auth.state";
export * from "./me.state";
export * from "./users.state";
export * from "./sessions.state";
export * from "./rooms.state";
export * from "./chat-msgs.state";
export * from "./contact-us.state";
export * from "./tasks.state";
//add some stat type, exp pts for clients taking classes, show on leaderboard