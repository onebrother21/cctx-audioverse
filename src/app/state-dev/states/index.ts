import { HCLContentState } from './content';
import { AlertsState } from './alerts';
import { SearchState } from './search';
import { HCLPlayersState } from './players';
import { HCLGamesState } from './games';
import { HCLTourneysState } from './tourneys';
import { HCLInvitesState } from './invites';
import { HCLLessonsState } from './lessons';
import { HCLPostsState } from './posts';

export interface AppState {
  alerts:AlertsState;
  content:HCLContentState;
  search:SearchState;
  players:HCLPlayersState;
  games:HCLGamesState;
  tourneys:HCLTourneysState;
  invites:HCLInvitesState;
  lessons:HCLLessonsState;
  posts:HCLPostsState;
}

//add some stat type, exp pts for clients taking classes, show on leaderboard

export * from "./alerts";
export * from "./common";
export * from "./content";
export * from "./games";
export * from "./invites";
export * from "./lessons";
export * from "./posts";
export * from "./players";
export * from "./search";
export * from "./tourneys";