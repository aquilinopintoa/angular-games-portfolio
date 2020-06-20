import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipsBalanceDetailsRoutingModule } from './chips-balance-details-routing.module';
import { ChipsBalanceDetailsContainer } from './containers/chips-balance-details.container';


@NgModule({
  declarations: [ChipsBalanceDetailsContainer],
  imports: [
    CommonModule,
    ChipsBalanceDetailsRoutingModule
  ]
})
export class ChipsBalanceDetailsModule { }
