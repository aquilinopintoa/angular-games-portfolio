import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsContainer } from './chips.container';

describe('ChipsComponent', () => {
  let component: ChipsContainer;
  let fixture: ComponentFixture<ChipsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
