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


export const REDUCERS = {
  router:routerReducer,
  layout:LayoutReducer,
  navigation:NavigationReducer,
  auth:AuthenticationReducer,
  me:MeReducer,
  //uploads:UploadsReducers,
  users:UsersReducer,
  sessions:SessionsReducer,
  rooms:RoomsReducer,
  msgs:ChatMessagesReducer,
  contactUs:ContactUsReducer,
  tasks:TasksReducer,
} as ActionReducerMap<AppState>;