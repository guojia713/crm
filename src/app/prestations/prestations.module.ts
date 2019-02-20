import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsListComponent } from './containers/prestations-list/prestations-list.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { PrestationsRoutingModule } from './prestations-routing.module';

@NgModule({
  declarations: [PrestationsListComponent, PrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule
  ]
})
export class PrestationsModule { }
