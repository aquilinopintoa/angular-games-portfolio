import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipsRoutingModule } from './chips-routing.module';
import { ChipsContainer } from './containers/chips/chips.container';


@NgModule({
  declarations: [ChipsContainer],
  imports: [
    CommonModule,
    ChipsRoutingModule
  ]
})
export class ChipsModule { }
