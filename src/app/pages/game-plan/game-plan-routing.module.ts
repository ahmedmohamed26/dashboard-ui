import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengesComponent } from './challenges/challenges.component';
import { GameLevelsComponent } from './game-levels/game-levels.component';
import { GamePlanComponent } from './game-plan.component';
import { QuestsComponent } from './quests/quests.component';

const routes: Routes = [
  { path: '', redirectTo: 'game-level' },
  {
    path: '',
    component: GamePlanComponent,
    
    children: [
      {
        path: 'game-level',
        component:GameLevelsComponent
      },
      {
        path: 'challenges',
        component:ChallengesComponent
      },
      {
        path: 'quests',
        component:QuestsComponent
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamePlanRoutingModule { }
