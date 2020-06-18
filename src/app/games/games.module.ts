import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesContainer } from './containers/games/games.container';


@NgModule({
  declarations: [GamesContainer],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
