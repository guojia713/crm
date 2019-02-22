import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './conponents/table/table.component';
import { TotalPipe } from './pipe/total.pipe';
import { ColorStatusDirective } from './directives/color-status.directive';

@NgModule({
  declarations: [TableComponent, TotalPipe, ColorStatusDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    TotalPipe,
    ColorStatusDirective
  ]
})
export class SharedModule { }
