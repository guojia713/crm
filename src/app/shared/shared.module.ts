import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './conponents/table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent
  ]
})
export class SharedModule { }
