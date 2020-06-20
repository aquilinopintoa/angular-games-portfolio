import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChipsBalanceDetailsContainer } from './containers/chips-balance-details.container';

const routes: Routes = [{ path: '', component: ChipsBalanceDetailsContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChipsBalanceDetailsRoutingModule { }
