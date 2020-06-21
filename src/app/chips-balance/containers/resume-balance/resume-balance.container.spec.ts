import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBalanceContainer } from './resume-balance.container';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {provideMockStore} from '@ngrx/store/testing';
import {initialState} from '../../+state/reducers/chips-balance.reducer';

// todo :: review error with mdi icons

describe('ResumeBalanceContainer', () => {
  let component: ResumeBalanceContainer;
  let fixture: ComponentFixture<ResumeBalanceContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeBalanceContainer ],
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
    fixture = TestBed.createComponent(ResumeBalanceContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
