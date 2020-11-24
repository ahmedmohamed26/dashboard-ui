import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamePlanRoutingModule } from './game-plan-routing.module';
import { GamePlanComponent } from './game-plan.component';
import { GameLevelsComponent } from './game-levels/game-levels.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { QuestsComponent } from './quests/quests.component';


@NgModule({
  declarations: [GamePlanComponent, GameLevelsComponent, ChallengesComponent, QuestsComponent],
  imports: [
    CommonModule,
    GamePlanRoutingModule
  ]
})
export class GamePlanModule { }
