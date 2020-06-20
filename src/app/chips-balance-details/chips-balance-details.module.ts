import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipsBalanceDetailsRoutingModule } from './chips-balance-details-routing.module';
import { ChipsBalanceDetailsContainer } from './containers/chips-balance-details.container';
import {ChipsBalanceModule} from '../dashboard/modules/chips-balance/chips-balance.module';


@NgModule({
  declarations: [ChipsBalanceDetailsContainer],
  imports: [
    CommonModule,
    ChipsBalanceDetailsRoutingModule,
    ChipsBalanceModule
  ]
})
export class ChipsBalanceDetailsModule { }
