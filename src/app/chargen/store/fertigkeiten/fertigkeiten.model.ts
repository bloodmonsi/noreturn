import { ID } from '@datorama/akita';

export interface Fertigkeit {
  id: ID;
  name: string;
  attribut: string;
  input: string;
  wert: number;
}

export function erstelleFertigkeit({ id = null, name = '', attribut = '', input = '', wert = 0}: Partial<Fertigkeit>) {
  return {
    id, name, attribut, input, wert
  };
}
