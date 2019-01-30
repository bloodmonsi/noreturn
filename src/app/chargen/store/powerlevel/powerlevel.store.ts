import { EntityStore, StoreConfig } from '@datorama/akita';
import { Powerlevel } from './powerlevel.model';
import { PowerlevelState } from './powerlevel.state';

@StoreConfig({name: 'powerlevel'})
export class PowerlevelStore extends EntityStore<PowerlevelState, Powerlevel> {
  constructor() {
    super();
  }
}
