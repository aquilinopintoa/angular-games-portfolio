import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesContainer } from './containers/games/games.container';

const routes: Routes = [{ path: '', component: GamesContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
