import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardContainer } from './containers/dashboard/dashboard.container';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainer,
    children: [
      {
        path: 'chips',
        loadChildren: () => import('../chips/chips.module').then(m => m.ChipsModule)
      },
      {
        path: 'games',
        loadChildren: () => import('../games/games.module').then(m => m.GamesModule)
      },
      {
        path: '',
        redirectTo: '/games'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
