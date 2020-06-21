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
    },
    {
      id: '4 test',
      name: '4 test',
      description: 'test',
      level: 4,
      img: 'http://stokpic.com/wp-content/uploads/2017/04/Atlantis-Beach-Holiday-Resort-in-The-Bahamas.jpg'
    },
    {
      id: '5 test',
      name: '5 test',
      description: 'test',
      level: 5,
      img: 'http://stokpic.com/wp-content/uploads/2015/09/Everything-Apple-iMac-iPhone-iPad-Macbook-And-Apple-Watch.jpg'
    },
    {
      id: '6 test',
      name: '6 test',
      description: 'test',
      level: 6,
      img: 'http://stokpic.com/wp-content/uploads/2016/07/Woman-and-Child-Walking-Through-Mist-At-Sunset-Between-Trees.jpg'
    },
    {
      id: '7 test',
      name: '7 test',
      description: 'test',
      level: 7,
      img: 'http://stokpic.com/wp-content/uploads/2016/07/Man-Walking-Through-Green-Forest-With-Mist.jpg'
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

