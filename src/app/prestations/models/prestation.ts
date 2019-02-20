import { PrestationI } from '../interface/prestation-i';
import { PrestationStatus } from '../enumerables/prestation-status.enum';
import { PrestationType } from '../enumerables/prestation-type.enum';

export class Prestation implements PrestationI {
  id: string | number;
  name: string;
  client: string;
  lieu?: string;
  status: PrestationStatus = PrestationStatus.OPTION;
  type: PrestationType = PrestationType.PRESTATION;
  nbJours = 1;
  dateDebut: string = new Date().toISOString();
  dateFin: string;
  tauxTva = 20;
  tjmHt = 100;

  constructor(fields?: Partial<Prestation> & Pick<Prestation,  'id'> ) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
  // new Prestation()
  // new Prestation({name :'Pierre'})
  // new Prestation({})
  // new Prestation({isAdmin : false})  ==> Repondre une erreur

totalHT(): number {
    return this.nbJours * this.tjmHt;
  }
totalTTC(): number {
    // this.totalHT() * (1 + this.tauxTva / 100);

    const totalHT = this.totalHT();
    return totalHT * (totalHT + this.tauxTva / 100);
  }
}
