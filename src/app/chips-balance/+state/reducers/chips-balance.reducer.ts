import { createReducer, on } from '@ngrx/store';
import * as ChipsBalanceActions from '../actions/chips-balance.actions';

export const chipsBalanceFeatureKey = 'chipsBalance';

export interface State {
  balance: number;
}

export const initialState: State = {
  balance: 0
};


export const reducer = createReducer(
  initialState,

  on(ChipsBalanceActions.loadChipsBalances, state => state),
  on(ChipsBalanceActions.increment, (state, { value }) => {
    return {
      ...state,
      balance: state.balance + value
    };
  }),

);

