import {
  Directive,
  Input,
  OnInit,
  OnChanges,
  HostBinding
} from '@angular/core';
import { PrestationStatus } from 'src/app/prestations/enumerables/prestation-status.enum';

@Directive({
  selector: '[appColorStatus]'
})
export class ColorStatusDirective implements OnInit, OnChanges {

  constructor() {}
  @Input() appColorStatus: PrestationStatus;
  @HostBinding('class') myClass: string;

  ngOnInit() {
    console.log(this.appColorStatus);
  }

  ngOnChanges() {
    this.myClass = this.formatClass(this.appColorStatus);
  }

  /**
   * Transform status into class css
   * Param : annulé -> return state-annule
   */
  private formatClass(state: PrestationStatus): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }
}
