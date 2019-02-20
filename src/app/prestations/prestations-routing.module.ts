import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestationsListComponent } from './containers/prestations-list/prestations-list.component';

const routes: Routes = [
  {path: 'prestations', component: PrestationsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }
