import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesContainer } from './games.container';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromGames from '../../+state/reducers/games.reducer';
import {MatCardModule, MatGridListModule, MatIconModule, MatInputModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {GameFiltersComponent} from '../../components/game-filters/game-filters.component';
import {GameCardComponent} from '../../components/game-card/game-card.component';
import {provideMockStore} from '@ngrx/store/testing';
import {initialState} from '../../+state/reducers/games.reducer';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('GamesComponent', () => {
  let component: GamesContainer;
  let fixture: ComponentFixture<GamesContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesContainer, GameFiltersComponent, GameCardComponent ],
      imports: [
        CommonModule,
        NoopAnimationsModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatGridListModule,
        RouterTestingModule
      ],
      providers: [
        provideMockStore({
          initialState: {
            games: initialState
          }
        }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
