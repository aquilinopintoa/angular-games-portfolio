import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromChipsBalance from '../reducers/chips-balance.reducer';

export const selectChipsBalanceState = createFeatureSelector<fromChipsBalance.State>(
  fromChipsBalance.chipsBalanceFeatureKey
);

export const selectFeatureBalance = createSelector(
  selectChipsBalanceState,
  (state: fromChipsBalance.State) => state.balance
);
