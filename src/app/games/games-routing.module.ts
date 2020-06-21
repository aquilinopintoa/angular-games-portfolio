import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesContainer } from './containers/games/games.container';
import {GameDetailsContainer} from './containers/game-details/game-details.container';

const routes: Routes = [
  { path: ':id', component: GameDetailsContainer },
  { path: '', component: GamesContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
