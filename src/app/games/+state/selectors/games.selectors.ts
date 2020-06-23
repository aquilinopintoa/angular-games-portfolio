import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGames from '../reducers/games.reducer';
import {Game} from '../../interfaces/game';
import {State} from '../reducers/games.reducer';

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
    .sort(comparator(state))
);

const comparator = (state: State) => (game1: Game, game2: Game) => {
  if (game1[state.context.sort] > game2[state.context.sort]) {
    return 1;
  } else if (game1[state.context.sort] < game2[state.context.sort]) {
    return -1;
  } else {
    return 0;
  }
};

