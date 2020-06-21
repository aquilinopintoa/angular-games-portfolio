import { createReducer, on } from '@ngrx/store';
import * as GamesActions from '../actions/games.actions';
import {Game} from '../../interfaces/game';
import {GamesContext} from '../../interfaces/games-context';

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
  games: [
    {
      id: 'test',
      name: 'test',
      description: 'test',
      level: 5,
      img: 'https://stokpic.com/wp-content/uploads/2017/07/Friends-Playing-In-The-Sea-and-Spashing-Water.jpg'
    },
    {
      id: 'test 1',
      name: '1 test',
      description: 'test',
      level: 1,
      img: 'http://stokpic.com/wp-content/uploads/2016/06/Apple-Smart-Watch-With-Heart-Rate-fitness-App.jpg'
    },
    {
      id: 'test 2',
      name: '2 test',
      description: 'test',
      level: 2,
      img: 'http://stokpic.com/wp-content/uploads/2017/07/Sign-Post-On-Traopic-isalnd-Beach.jpg'
    },
    {
      id: '3 test',
      name: '3 test',
      description: 'test',
      level: 3,
      img: 'http://stokpic.com/wp-content/uploads/2017/07/Friends-Playing-In-The-Sea-and-Spashing-Water.jpg'
    }
  ]
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

