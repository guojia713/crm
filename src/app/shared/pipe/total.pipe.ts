import { Pipe, PipeTransform } from '@angular/core';
import { Prestation } from 'src/app/prestations/models/prestation';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Prestation, args?: boolean): number {
    return args ? value.totalHT() : value.totalTTC();
  }

}
