import { ActionReducerMap } from '@ngrx/store';
import { QS_State } from '../states';
import { QS_LayoutReducer } from "./layout.reducer";
import { QS_NavigationReducer } from "./navigation.reducer";
import { QS_ContactUsReducer } from "./contact-us.reducer";
import { QS_TasksReducer } from "./tasks.reducer";
import { QS_ChatMessagesReducer } from './chat-msgs.reducer';
import { QS_MeReducer } from './me.reducer';
import { QS_AuthenticationReducer } from './auth.reducer';
import { QS_SessionsReducer } from './sessions.reducer';
import { QS_RoomsReducer } from './rooms.reducer';
import { QS_UsersReducer } from './users.reducer';

export const REDUCERS = {
  layout:QS_LayoutReducer,
  navigation:QS_NavigationReducer,
  contactUs:QS_ContactUsReducer,
  tasks:QS_TasksReducer,
  msgs:QS_ChatMessagesReducer,
  me:QS_MeReducer,
  auth:QS_AuthenticationReducer,
  sessions:QS_SessionsReducer,
  rooms:QS_RoomsReducer,
  users:QS_UsersReducer
} as ActionReducerMap<QS_State>;
