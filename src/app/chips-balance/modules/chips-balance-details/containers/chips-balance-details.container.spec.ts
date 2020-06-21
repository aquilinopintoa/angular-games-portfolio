import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsBalanceDetailsContainer } from './chips-balance-details.container';
import {CommonModule} from '@angular/common';
import {ChipsBalanceDetailsRoutingModule} from '../chips-balance-details-routing.module';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {provideMockStore} from '@ngrx/store/testing';
import {initialState} from '../../../+state/reducers/chips-balance.reducer';

describe('ChipsBalanceDetailsComponent', () => {
  let component: ChipsBalanceDetailsContainer;
  let fixture: ComponentFixture<ChipsBalanceDetailsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsBalanceDetailsContainer ],
      imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule
      ],
      providers: [
        provideMockStore({
          initialState: {
            chipsBalance: initialState
          }
        }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsBalanceDetailsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
