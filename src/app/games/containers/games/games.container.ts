import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../+state/reducers/games.reducer';
import { selectFeatureGames } from '../../+state/selectors/games.selectors';

@Component({
  selector: 'agp-games',
  templateUrl: './games.container.html',
  styleUrls: ['./games.container.scss']
})
export class GamesContainer implements OnInit {

  games = this._store.pipe(select(selectFeatureGames));

  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit() {
  }

}
