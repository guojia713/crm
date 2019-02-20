import { Component, OnInit } from '@angular/core';
import { Collection } from '../../collection';

@Component({
  selector: 'app-prestations-list',
  templateUrl: './prestations-list.component.html',
  styleUrls: ['./prestations-list.component.scss']
})
export class PrestationsListComponent implements OnInit {
  public prestations = Collection;
  headerCol1 = [
    'id',
    'name',
    'client',
    'lieu',
    'type',
    'status',
    'jours',
    'date de début',
    'date de fin',
    'tauxTva',
    'tjmHt',
    'totalHT',
    'totalTTC'
  ];

  constructor() {}

  ngOnInit() {}
}
