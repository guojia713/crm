import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsListComponent } from './containers/prestations-list/prestations-list.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PrestationsListComponent, PrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PrestationsModule { }
