import { PrestationStatus } from '../enumerables/prestation-status.enum';
import { PrestationType } from '../enumerables/prestation-type.enum';

export interface PrestationI {
  id: number | string;
  name: string;
  client: string;
  lieu?: string;
  status: PrestationStatus;
  type: PrestationType;
  nbJours: number;
  dateDebut: string;
  dateFin: string;
  tauxTva: number;
  tjmHt: number;

  totalHT(): number;
  totalTTC(): number;
}
