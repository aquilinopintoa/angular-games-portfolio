import { createReducer, on } from '@ngrx/store';
import * as GamesActions from '../actions/games.actions';
import {Game} from '../../interfaces/game';

export const gamesFeatureKey = 'games';

export interface State {
  games: Game[];
}

export const initialState: State = {
  games: [
    {
      id: 'test',
      name: 'test',
      description: 'test',
      level: 1,
      img: 'https://stokpic.com/wp-content/uploads/2017/07/Friends-Playing-In-The-Sea-and-Spashing-Water.jpg'
    },
    {
      id: 'test 1',
      name: 'test 1',
      description: 'test',
      level: 1,
      img: 'http://stokpic.com/wp-content/uploads/2016/06/Apple-Smart-Watch-With-Heart-Rate-fitness-App.jpg'
    },
    {
      id: 'test 2',
      name: 'test 2',
      description: 'test',
      level: 1,
      img: 'http://stokpic.com/wp-content/uploads/2017/07/Sign-Post-On-Traopic-isalnd-Beach.jpg'
    },
    {
      id: 'test 3',
      name: 'test 3',
      description: 'test',
      level: 1,
      img: 'http://stokpic.com/wp-content/uploads/2017/07/Friends-Playing-In-The-Sea-and-Spashing-Water.jpg'
    }
  ]
};


export const reducer = createReducer(
  initialState,

  on(GamesActions.loadGamess, state => state),

);

