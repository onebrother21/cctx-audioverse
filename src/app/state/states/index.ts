import { RouterState } from './router.state';
import { LayoutState } from './layout.state';
import { NavigationState } from './navigation.state';
import { AuthenticationState } from './auth.state';
import { MeState } from './me.state';
import { UsersState } from './users.state';
import { SessionsState } from './sessions.state';
import { RoomsState } from './rooms.state';
import { ChatMessagesState } from './chat-msgs.state';
import { ContactUsState } from './contact-us.state';
import { TasksState } from "./tasks.state";

export interface AppState {
  router:RouterState;
  layout:LayoutState;
  navigation:NavigationState;
  auth:AuthenticationState;
  me:MeState;
  users:UsersState;
  sessions:SessionsState;
  rooms:RoomsState; 
  msgs:ChatMessagesState;
  contactUs:ContactUsState;
  tasks:TasksState;
}

export * from "./common.state";
export * from "./router.state";
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