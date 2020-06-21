import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailsContainer } from './game-details.container';

describe('GameDetailsComponent', () => {
  let component: GameDetailsContainer;
  let fixture: ComponentFixture<GameDetailsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDetailsContainer ]
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
