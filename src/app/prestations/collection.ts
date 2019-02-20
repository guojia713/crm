import { Prestation } from './models/prestation';
import { PrestationStatus } from './enumerables/prestation-status.enum';
import { PrestationType } from './enumerables/prestation-type.enum';

export const Collection: Prestation[] = [
  new Prestation({id: 1, client: 'Sophia'}),
  new Prestation({id: 2, client: 'airFrance', lieu: 'Paris', status : PrestationStatus.COMFIRME, type: PrestationType.FORMATION}),
  new Prestation({id: 3, client: 'M2I', nbJours : 5, name : 'Jia' })
];
