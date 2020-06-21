import { createAction, props } from '@ngrx/store';
import {GamesContext} from '../../interfaces/games-context';

export const loadGamess = createAction(
  '[Games] Load Gamess'
);

export const setGamesContext = createAction(
  '[Games] Set Context',
  props<{ context: GamesContext }>()
);




