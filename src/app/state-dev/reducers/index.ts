import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../states";

import { HCLContentReducer } from './content';
import { AlertsReducer } from './alerts';
import { SearchReducer } from './search';
import { HCLPlayersReducer } from './players';
import { HCLGamesReducer } from './games';
import { HCLTourneysReducer } from './tourneys';
import { HCLInvitesReducer } from './invites';
import { HCLLessonsReducer } from './lessons';
import { HCLPostsReducer } from './posts';

export const REDUCERS = {
  content:HCLContentReducer,
  alerts:AlertsReducer,
  search:SearchReducer,
  players:HCLPlayersReducer,
  games:HCLGamesReducer,
  tourneys:HCLTourneysReducer,
  invites:HCLInvitesReducer,
  lessons:HCLLessonsReducer,
  posts:HCLPostsReducer,
} as ActionReducerMap<AppState>;