import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesContainer } from './games.container';

describe('GamesComponent', () => {
  let component: GamesContainer;
  let fixture: ComponentFixture<GamesContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesContainer ]
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
