import * as fromGames from '../reducers/games.reducer';
import { selectGamesState } from './games.selectors';

describe('Games Selectors', () => {
  it('should select the feature state', () => {
    const result = selectGamesState({
      [fromGames.gamesFeatureKey]: {
        games: [],
        context: {
          filter: '',
          sort: ''
        }
      }
    });

    expect(result).toEqual({
      games: [],
      context: {
        filter: '',
        sort: ''
      }
    });
  });
});
