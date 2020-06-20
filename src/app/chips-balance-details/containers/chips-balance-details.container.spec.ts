import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsBalanceDetailsContainer } from './chips-balance-details.container';

describe('ChipsBalanceDetailsComponent', () => {
  let component: ChipsBalanceDetailsContainer;
  let fixture: ComponentFixture<ChipsBalanceDetailsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsBalanceDetailsContainer ]
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
