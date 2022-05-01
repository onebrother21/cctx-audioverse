import { AppEffects } from './app.effects';
import { LayoutsEffects } from './layouts.effects';
import { NavigationEffects } from './navigation.effects';
import { AuthenticationEffects } from './auth.effects';
import { MeEffects } from './me.effects';
import { UsersEffects } from './users.effects';
import { BusinessesEffects } from './businesses.effects';
import { PaymentsEffects } from './payments.effects';


export const EFFECTS = [
  AppEffects,
  LayoutsEffects,
  NavigationEffects,
  AuthenticationEffects,
  MeEffects,
  UsersEffects,
  BusinessesEffects,
  PaymentsEffects,
];