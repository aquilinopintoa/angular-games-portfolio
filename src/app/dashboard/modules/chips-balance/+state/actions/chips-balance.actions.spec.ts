import * as fromChipsBalance from './chips-balance.actions';

describe('loadChipsBalances', () => {
  it('should return an action', () => {
    expect(fromChipsBalance.loadChipsBalances().type).toBe('[ChipsBalance] Load ChipsBalances');
  });
});
