import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../interfaces/game';

@Component({
  selector: 'agp-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() game: Game;

  constructor() { }

  ngOnInit() {
  }

}
