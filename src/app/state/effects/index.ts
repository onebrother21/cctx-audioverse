import { LayoutEffects } from './layout.effects';
import { NavigationEffects } from './navigation.effects';
import { ContactUsEffects } from './contact-us.effects';
import { TasksEffects } from "./tasks.effects";
import { ChatMessagesEffects } from './chat-msgs.effects';
import { MeEffects } from './me.effects';
import { AuthenticationEffects } from './auth.effects';
import { SessionsEffects } from './sessions.effects';
import { RoomsEffects } from './rooms.effects';
import { UsersEffects } from './users.effects';

export const EFFECTS = [
  LayoutEffects,
  NavigationEffects,
  AuthenticationEffects,
  MeEffects,
  UsersEffects,
  SessionsEffects,
  RoomsEffects,
  ChatMessagesEffects,
  ContactUsEffects,
  TasksEffects,
];