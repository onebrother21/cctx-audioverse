import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from "../states";
import { LayoutReducer } from "./layout.reducer";
import { NavigationReducer } from "./navigation.reducer";
import { ContactUsReducer } from "./contact-us.reducer";
import { TasksReducer } from "./tasks.reducer";
import { ChatMessagesReducer } from './chat-msgs.reducer';
import { MeReducer } from './me.reducer';
import { AuthenticationReducer } from '../../reducers/auth.reducer';
import { SessionsReducer } from './sessions.reducer';
import { RoomsReducer } from './rooms.reducer';
import { UsersReducer } from './users.reducer';

export const REDUCERS = {
  router:routerReducer,
  layout:LayoutReducer,
  navigation:NavigationReducer,
  contactUs:ContactUsReducer,
  tasks:TasksReducer,
  msgs:ChatMessagesReducer,
  me:MeReducer,
  auth:AuthenticationReducer,
  sessions:SessionsReducer,
  rooms:RoomsReducer,
  users:UsersReducer
} as ActionReducerMap<AppState>;