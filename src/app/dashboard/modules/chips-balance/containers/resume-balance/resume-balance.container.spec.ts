import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBalanceContainer } from './resume-balance.container';

describe('ResumeBalanceContainer', () => {
  let component: ResumeBalanceContainer;
  let fixture: ComponentFixture<ResumeBalanceContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeBalanceContainer ]
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
