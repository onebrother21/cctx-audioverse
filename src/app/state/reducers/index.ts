import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../states";
import { routerReducer } from "@ngrx/router-store";
import { LayoutReducer } from "./layout.reducer";
import { NavigationReducer } from "./navigation.reducer";
import { ContactUsReducer } from "./contact-us.reducer";
import { TasksReducer } from "./tasks.reducer";
import { ChatMessagesReducer } from './chat-msgs.reducer';
import { MeReducer } from './me.reducer';
import { AuthenticationReducer } from './auth.reducer';
import { SessionsReducer } from './sessions.reducer';
import { RoomsReducer } from './rooms.reducer';
import { UsersReducer } from './users.reducer';

import { NavigationReducer } from './navigation';
import { LayoutReducer } from './layout';
import { HCLContentReducer } from './content';
import { AlertsReducer } from '../../reducers/alerts';
import { AuthReducer } from './auth';
import { UserReducer } from './user';
import { SearchReducer } from './search';
import { HCLPlayersReducer } from './players';
import { HCLGamesReducer } from './games';
import { HCLTourneysReducer } from './tourneys';
import { HCLInvitesReducer } from './invites';
import { HCLLessonsReducer } from './lessons';
import { HCLPostsReducer } from './posts';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states';

export const REDUCERS = {
  router:routerReducer,
  layout:LayoutReducer,
  content:HCLContentReducer,
  alerts:AlertsReducer,
  navigation:NavigationReducer,
  search:SearchReducer,
  auth:AuthenticationReducer,
  me:MeReducer,
  //uploads:UploadsReducers,
  users:UsersReducer,
  sessions:SessionsReducer,
  rooms:RoomsReducer,
  msgs:ChatMessagesReducer,
  contactUs:ContactUsReducer,
  tasks:TasksReducer,
  players:HCLPlayersReducer,
  games:HCLGamesReducer,
  tourneys:HCLTourneysReducer,
  invites:HCLInvitesReducer,
  lessons:HCLLessonsReducer,
  posts:HCLPostsReducer,
} as ActionReducerMap<AppState>;