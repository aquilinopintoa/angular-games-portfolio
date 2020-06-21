import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GamesContext} from '../../interfaces/games-context';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'agp-game-filters',
  templateUrl: './game-filters.component.html',
  styleUrls: ['./game-filters.component.scss']
})
export class GameFiltersComponent implements OnInit {

  form = new FormGroup({
    filter: new FormControl(''),
    sort: new FormControl('level')
  });

  @Output() contextChanged = new EventEmitter<GamesContext>();

  constructor() { }

  ngOnInit() {
    this.form.valueChanges
      .pipe(debounceTime(0.5 * 1000))
      .subscribe(() => {
        this.contextChanged.emit(this.form.value);
      });
  }

}
