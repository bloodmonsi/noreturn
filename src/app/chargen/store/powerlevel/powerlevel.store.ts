import { Store, StoreConfig } from '@datorama/akita';
import { Powerlevel, erstellePowerlevel } from './powerlevel.model';

const initialState: Powerlevel = erstellePowerlevel({name: 'Bob', gp: 450});

@StoreConfig({name: 'powerlevel'})
export class PowerlevelStore extends Store<Powerlevel> {
  constructor() {
    super(initialState);
  }
}
