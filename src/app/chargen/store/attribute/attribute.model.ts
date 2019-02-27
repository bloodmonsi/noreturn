import { ID } from '@datorama/akita';

export interface Attribut {
  id: ID;
  name: string;
  kurzName: string;
  kosten: number;
  primaer: boolean;
  wert: number;
}
