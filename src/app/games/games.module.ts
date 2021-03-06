import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesContainer } from './containers/games/games.container';
import { StoreModule } from '@ngrx/store';
import * as fromGames from './+state/reducers/games.reducer';
import { GameCardComponent } from './components/game-card/game-card.component';
import {MatCardModule, MatGridListModule, MatIconModule, MatInputModule, MatSelectModule} from '@angular/material';
import { GameFiltersComponent } from './components/game-filters/game-filters.component';
import { GameDetailsContainer } from './containers/game-details/game-details.container';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GamesContainer, GameCardComponent, GameFiltersComponent, GameDetailsContainer],
  imports: [
    CommonModule,
    GamesRoutingModule,
    StoreModule.forFeature(fromGames.gamesFeatureKey, fromGames.reducer),
    MatCardModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatGridListModule,
  ]
})
export class GamesModule { }
