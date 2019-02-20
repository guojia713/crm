import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() classes = 'table-hover';
  @Input() headers: string[];

  @Input() prestations: string[];

  constructor() { }

  ngOnInit() {
  }

}
