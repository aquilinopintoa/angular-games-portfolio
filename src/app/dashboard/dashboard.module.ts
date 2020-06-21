import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainer } from './containers/dashboard/dashboard.container';
import { ChipsBalanceModule } from '../chips-balance/chips-balance.module';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [DashboardContainer],
  imports: [
      CommonModule,
      DashboardRoutingModule,
      ChipsBalanceModule,
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatButtonModule,
      MatListModule
  ],
})
export class DashboardModule { }
