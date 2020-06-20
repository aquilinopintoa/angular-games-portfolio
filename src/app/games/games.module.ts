import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesContainer } from './containers/games/games.container';
import { StoreModule } from '@ngrx/store';
import * as fromGames from './+state/reducers/games.reducer';


@NgModule({
  declarations: [GamesContainer],
  imports: [
    CommonModule,
    GamesRoutingModule,
    StoreModule.forFeature(fromGames.gamesFeatureKey, fromGames.reducer),
  ]
})
export class GamesModule { }
