import { AppEffects } from './app.effects';
import { LayoutEffects } from './layout.effects';
import { NavigationEffects } from './navigation.effects';
import { AuthenticationEffects } from './auth.effects';
import { MeEffects } from './me.effects';
import { UsersEffects } from './users.effects';
import { BusinessesEffects } from './businesses.effects';


export const EFFECTS = [
  AppEffects,
  LayoutEffects,
  NavigationEffects,
  AuthenticationEffects,
  MeEffects,
  UsersEffects,
  BusinessesEffects,
];