import * as fromChipsBalance from '../reducers/chips-balance.reducer';
import { selectChipsBalanceState } from './chips-balance.selectors';

describe('ChipsBalance Selectors', () => {
  it('should select the feature state', () => {
    const result = selectChipsBalanceState({
      [fromChipsBalance.chipsBalanceFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
