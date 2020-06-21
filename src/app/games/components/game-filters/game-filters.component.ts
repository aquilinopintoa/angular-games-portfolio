import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GamesContext} from '../../interfaces/games-context';

const DEFAULT_GAME_CONTEXT: GamesContext = {
  sort: '',
  filter: ''
};

@Component({
  selector: 'agp-game-filters',
  templateUrl: './game-filters.component.html',
  styleUrls: ['./game-filters.component.scss']
})
export class GameFiltersComponent implements OnInit {

  form: FormGroup;

  @Input() context: GamesContext;

  @Output() contextChanged = new EventEmitter<GamesContext>();

  constructor() { }

  ngOnInit() {
    this.context = this.context || DEFAULT_GAME_CONTEXT;

    this.form =  new FormGroup({
      filter: new FormControl(this.context.filter || ''),
      sort: new FormControl(this.context.sort || '')
    });

    this.form.valueChanges
      .subscribe(() => {
        this.contextChanged.emit(this.form.value);
      });
  }

}
