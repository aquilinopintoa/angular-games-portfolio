import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChipsContainer } from './containers/chips/chips.container';

const routes: Routes = [{ path: '', component: ChipsContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChipsRoutingModule { }
