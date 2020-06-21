import { Component, OnInit } from '@angular/core';
import {State} from '../../+state/reducers/games.reducer';
import {select, Store} from '@ngrx/store';
import {selectFeatureGame} from '../../+state/selectors/games.selectors';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'agp-game-details',
  templateUrl: './game-details.container.html',
  styleUrls: ['./game-details.container.scss']
})
export class GameDetailsContainer implements OnInit {

  game = this._store.pipe(select(selectFeatureGame, this._route.snapshot.params.id));

  constructor(
    private _store: Store<State>,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
