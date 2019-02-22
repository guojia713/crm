import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../models/prestation';
import { PrestationStatus } from '../../enumerables/prestation-status.enum';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() item: Prestation;
  statusPrestations = Object.values(PrestationStatus);
  constructor() { }

  ngOnInit() {
  }

}
