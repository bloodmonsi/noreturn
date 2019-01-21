import { ID } from '@datorama/akita';

export interface Powerlevel {
  id: ID;
  name: string;
  gp: number;
}

export function erstellePowerlevel({ id = null, name = '', gp = 0}: Partial<Powerlevel>) {
  return {
    id, name, gp
  };
}
