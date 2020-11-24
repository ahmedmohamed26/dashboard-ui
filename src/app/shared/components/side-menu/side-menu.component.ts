import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  routerList = [
    { name: 'dashboard', path: 'dashboard',image:'assets/images/dashboard.png' },
    { name: 'game plan', path: "game-plan",image:'assets/images/gameplan.png' },
    { name: 'levels',  path: 'levels',image:'assets/images/levels.png' },
  ];
  constructor() { }

}
