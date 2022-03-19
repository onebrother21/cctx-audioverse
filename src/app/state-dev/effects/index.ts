import { CoreAppEffects } from './app';
import { LayoutEffects } from './layout.effects';
import { NavigationEffects } from './navigation.effects';
import { AuthenticationEffects } from './auth.effects';
import { HCLContentEffects } from './content';
import { AlertsEffects } from './alerts';
import { AuthEffects } from './auth';
import { UserEffects } from './user';
import { SearchEffects } from './search';
import { HCLPlayersEffects } from './players';
import { HCLGamesEffects } from './games';
import { HCLTourneysEffects } from './tourneys';
import { HCLInvitesEffects } from './invites';
import { HCLLessonsEffects } from './lessons';
import { HCLPostsEffects } from './posts';

export * from "./alerts";
export * from "./app";
export * from "./auth";
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

export const EFFECTS = [
  CoreAppEffects,
  LayoutEffects,
  NavigationEffects,
  AuthenticationEffects,
  AlertsEffects,
  AuthEffects,
  UserEffects,
  SearchEffects,
  HCLContentEffects,
  HCLPlayersEffects,
  HCLGamesEffects,
  HCLTourneysEffects,
  HCLInvitesEffects,
  HCLLessonsEffects,
  HCLPostsEffects,
];