import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../+state/reducers/games.reducer';
import {selectContext, selectGamesApplyContext} from '../../+state/selectors/games.selectors';
import { Router } from '@angular/router';
import { GamesContext } from '../../interfaces/games-context';
import { setGamesContext } from '../../+state/actions/games.actions';

const BREAKPOINT = 700;

@Component({
  selector: 'agp-games',
  templateUrl: './games.container.html',
  styleUrls: ['./games.container.scss']
})
export class GamesContainer implements OnInit {
  context = this._store.pipe(select(selectContext));
  games = this._store.pipe(select(selectGamesApplyContext));
  columns = 1;

  constructor(
    private _store: Store<State>,
    private _router: Router
  ) { }

  ngOnInit() {
    this.columns = window.innerWidth <= BREAKPOINT ? 3 : 5;
  }

  async goToGameDetails(id: string) {
    await this._router.navigate(['games', id]);
  }

  contextChangeHandler($context: GamesContext) {
    this._store.dispatch(setGamesContext({context: $context}));
  }

  onResize($event: Event) {
    this.columns = ($event.target as Window).innerWidth <= BREAKPOINT ? 3 : 5;
  }
}
