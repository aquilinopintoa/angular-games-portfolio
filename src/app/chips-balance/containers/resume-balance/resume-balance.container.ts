import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../+state/reducers/chips-balance.reducer';
import { selectFeatureBalance } from '../../+state/selectors/chips-balance.selectors';

@Component({
  selector: 'agp-resume-balance',
  templateUrl: './resume-balance.container.html',
  styleUrls: ['./resume-balance.container.scss']
})
export class ResumeBalanceContainer implements OnInit {

  balance = this._store.pipe(select(selectFeatureBalance));

  constructor(
    private _store: Store<State>,
  ) { }

  ngOnInit() {
  }
}
