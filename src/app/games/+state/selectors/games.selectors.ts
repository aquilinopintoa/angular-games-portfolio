import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGames from '../reducers/games.reducer';

export const selectGamesState = createFeatureSelector<fromGames.State>(
  fromGames.gamesFeatureKey
);

export const selectFeatureGames = createSelector(
  selectGamesState,
  (state: fromGames.State) => state.games
);

export const selectFeatureGame = createSelector(
  selectGamesState,
  (state: fromGames.State, id: string) => state.games.find((game) => game.id === id)
);
