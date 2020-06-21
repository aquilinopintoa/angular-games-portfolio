import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../+state/reducers/games.reducer';
import {selectFeatureGames, selectGamesApplyContext} from '../../+state/selectors/games.selectors';
import { Router } from '@angular/router';
import { GamesContext } from '../../interfaces/games-context';
import { setGamesContext } from '../../+state/actions/games.actions';

@Component({
  selector: 'agp-games',
  templateUrl: './games.container.html',
  styleUrls: ['./games.container.scss']
})
export class GamesContainer implements OnInit {
  games = this._store.pipe(select(selectGamesApplyContext));

  constructor(
    private _store: Store<State>,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  async goToGameDetails(id: string) {
    await this._router.navigate(['games', id]);
  }

  contextChangeHandler($context: GamesContext) {
    this._store.dispatch(setGamesContext({context: $context}));
  }
}
