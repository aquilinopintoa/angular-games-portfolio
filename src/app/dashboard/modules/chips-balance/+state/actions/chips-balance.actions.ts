import { createAction, props } from '@ngrx/store';

export const loadChipsBalances = createAction(
  '[ChipsBalance] Load ChipsBalances'
);

export const increment = createAction(
  '[ChipsBalance] Increment',
  props<{ value: number }>()
);




