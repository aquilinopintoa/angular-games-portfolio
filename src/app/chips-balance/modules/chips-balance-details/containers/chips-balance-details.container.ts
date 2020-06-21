import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {State} from '../../../+state/reducers/chips-balance.reducer';
import { selectFeatureBalance } from '../../../+state/selectors/chips-balance.selectors';
import {increment} from '../../../+state/actions/chips-balance.actions';

@Component({
  selector: 'agp-chips-balance-details',
  templateUrl: './chips-balance-details.container.html',
  styleUrls: ['./chips-balance-details.container.scss']
})
export class ChipsBalanceDetailsContainer implements OnInit {

  balance = this._store.pipe(select(selectFeatureBalance));

  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit() {
  }

  requestChips() {
    this._store.dispatch(increment({value: 500}));
  }

}
