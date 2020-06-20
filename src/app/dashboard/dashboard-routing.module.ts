import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardContainer } from './containers/dashboard/dashboard.container';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainer,
    children: [
      {
        path: 'games',
        loadChildren: () => import('../games/games.module').then(m => m.GamesModule)
      },
      {
        path: 'chips-balance',
        loadChildren:
          () => import('../chips-balance/chips-balance.module').then(m => m.ChipsBalanceModule)
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
