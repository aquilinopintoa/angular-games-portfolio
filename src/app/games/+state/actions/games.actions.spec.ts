import * as fromGames from './games.actions';

describe('loadGamess', () => {
  it('should return an action', () => {
    expect(fromGames.loadGamess().type).toBe('[Games] Load Gamess');
  });
});
