import { ID } from '@datorama/akita';

export interface Attribut {
  id: ID;
  name: string;
  kurzName: string;
  kosten: number;
  primaer: boolean;
}

export function erstelleAttribut({ id = null, name = '', kurzName = '', kosten = 0, primaer = true}: Partial<Attribut>) {
  return {
    id, name, kurzName, kosten, primaer
  };
}
