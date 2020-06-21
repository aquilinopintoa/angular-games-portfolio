import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailsContainer } from './game-details.container';
import {CommonModule} from '@angular/common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {provideMockStore} from '@ngrx/store/testing';
import {initialState} from '../../+state/reducers/games.reducer';
import {ActivatedRoute} from '@angular/router';

describe('GameDetailsComponent', () => {
  let component: GameDetailsContainer;
  let fixture: ComponentFixture<GameDetailsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDetailsContainer ],
      imports: [
        CommonModule,
        NoopAnimationsModule,
      ],
      providers: [
        provideMockStore({
          initialState: {
            games: initialState
          }
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {}
            },
          },
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
