import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLevelsComponent } from './game-levels.component';

describe('GameLevelsComponent', () => {
  let component: GameLevelsComponent;
  let fixture: ComponentFixture<GameLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameLevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
