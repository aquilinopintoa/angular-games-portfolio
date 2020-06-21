import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContainer } from './dashboard.container';
import {CommonModule} from '@angular/common';
import {ChipsBalanceModule} from '../../../chips-balance/chips-balance.module';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {StoreModule} from '@ngrx/store';
import {initialState} from '../../../chips-balance/+state/reducers/chips-balance.reducer';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardContainer;
  let fixture: ComponentFixture<DashboardContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardContainer ],
      imports: [
        CommonModule,
        NoopAnimationsModule,
        // todo :: must fix this.
        StoreModule.forRoot({}),
        ChipsBalanceModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        RouterTestingModule
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
    fixture = TestBed.createComponent(DashboardContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
