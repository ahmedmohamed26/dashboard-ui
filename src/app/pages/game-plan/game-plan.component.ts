import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-plan',
  templateUrl: './game-plan.component.html',
  styleUrls: ['./game-plan.component.scss']
})
export class GamePlanComponent implements OnInit {
  routerList = [
    { name: 'levels', path: '/game-level'},
    { name: 'challenges', path: '/challenges'},
    { name: 'quests', path: '/quests'},
  ];
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
