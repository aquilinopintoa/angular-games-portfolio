import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBalanceContainer } from './containers/resume-balance/resume-balance.container';
import { StoreModule } from '@ngrx/store';
import * as fromChipsBalance from './+state/reducers/chips-balance.reducer';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ChipsBalanceRoutingModule } from './chips-balance-routing.module';


@NgModule({
  declarations: [ResumeBalanceContainer],
  exports: [
    ResumeBalanceContainer
  ],
  imports: [
    CommonModule,
    ChipsBalanceRoutingModule,
    StoreModule.forFeature(fromChipsBalance.chipsBalanceFeatureKey, fromChipsBalance.reducer),
    MatIconModule,
    MatButtonModule
  ],
})
export class ChipsBalanceModule { }
