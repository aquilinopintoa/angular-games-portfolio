import { createReducer, on } from '@ngrx/store';
import * as GamesActions from '../actions/games.actions';
import {Game} from '../../interfaces/game';
import {GamesContext} from '../../interfaces/games-context';
import * as mockGames from '../../mocks/games.json';

export const gamesFeatureKey = 'games';

export interface State {
  // todo :: remove this, create a new state for this.
  context: GamesContext;
  games: Game[];
}

export const initialState: State = {
  context: {
    sort: 'level',
    filter: ''
  },
  // todo :: remove this mock.
  games: mockGames.default
};


export const reducer = createReducer(
  initialState,

  on(GamesActions.loadGamess, state => state),
  on(GamesActions.setGamesContext, (state, { context }) => {
    return {
      ...state,
      context
    };
  }),
);

