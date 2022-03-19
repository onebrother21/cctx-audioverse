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

import { HCLContentState } from './content';
import { AlertsState } from './alerts';
import { AuthState } from './auth';
import { UserState } from './user';
import { SearchState } from './search';
import { HCLPlayersState } from './players';
import { HCLGamesState } from './games';
import { HCLTourneysState } from './tourneys';
import { HCLInvitesState } from './invites';
import { HCLLessonsState } from './lessons';
import { HCLPostsState } from './posts';

export interface AppState {
  router:RouterState;
  layout:LayoutState;
  alerts:AlertsState;
  content:HCLContentState;
  navigation:NavigationState;
  search:SearchState;
  auth:AuthenticationState;
  me:MeState;
  users:UsersState;
  sessions:SessionsState;
  rooms:RoomsState; 
  msgs:ChatMessagesState;
  contactUs:ContactUsState;
  tasks:TasksState;
  players:HCLPlayersState;
  games:HCLGamesState;
  tourneys:HCLTourneysState;
  invites:HCLInvitesState;
  lessons:HCLLessonsState;
  posts:HCLPostsState;
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

export * from "./alerts";
export * from "./auth";
export * from "./common";
export * from "./content";
export * from "./games";
export * from "./invites";
export * from "./layout";
export * from "./lessons";
export * from "./navigation";
export * from "./posts";
export * from "./players";
export * from "./search";
export * from "./tourneys";
export * from "./user";