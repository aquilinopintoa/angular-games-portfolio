import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'details',
        loadChildren: () => import('./modules/chips-balance-details/chips-balance-details.module').then(m => m.ChipsBalanceDetailsModule)
      },
      {
        path: '',
        redirectTo: 'details'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChipsBalanceRoutingModule { }
