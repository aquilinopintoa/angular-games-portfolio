import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'agp-dashboard',
  templateUrl: './dashboard.container.html',
  styleUrls: ['./dashboard.container.scss']
})
export class DashboardContainer implements OnInit {

  appLinks = [
    {
      path: '/games',
      label: 'Juegos'
    },
    {
      path: '/chips-balance/details',
      label: 'Balance'
    }
  ];

  externalLinks = [
    {
      path: 'https://apinto-angular-expense-control.firebaseapp.com/',
      label: 'Angular expense control'
    },
    {
      path: 'https://apinto-vue-card-manager.firebaseapp.com/',
      label: 'Vue card manager'
    }
  ];

  socialLinks = [
    {
      path: 'https://github.com/aquilinopintoa',
      icon: 'github',
    }
  ];

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {

  }

  async goToDetails() {
    await this._router.navigate(['/chips-balance']);
  }

}
