import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainer } from './containers/dashboard/dashboard.container';
import { ChipsBalanceModule } from './modules/chips-balance/chips-balance.module';
import {ChipsBalanceService} from './modules/chips-balance/services/chips-balance/chips-balance.service';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [DashboardContainer],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChipsBalanceModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    ChipsBalanceService
  ]
})
export class DashboardModule { }
