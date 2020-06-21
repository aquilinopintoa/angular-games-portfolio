import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGames from '../reducers/games.reducer';

export const selectGamesState = createFeatureSelector<fromGames.State>(
  fromGames.gamesFeatureKey
);

export const selectFeatureGames = createSelector(
  selectGamesState,
  (state: fromGames.State) => state.games
);
export const selectContext = createSelector(
  selectGamesState,
  (state: fromGames.State) => state.context
);


export const selectFeatureGame = createSelector(
  selectGamesState,
  (state: fromGames.State, id: string) => state.games.find((game) => game.id === id)
);

export const selectGamesApplyContext = createSelector(
  selectGamesState,
  (state: fromGames.State, id: string) => state.games
    .filter((game) => game.name.startsWith(state.context.filter))
    .sort((game1, game2) => game1[state.context.sort] - game2[state.context.sort])
);


