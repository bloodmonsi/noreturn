import { EntityStore, StoreConfig } from '@datorama/akita';
import { Spezies } from './spezies.model';
import { SpeziesState } from './spezies.state';

@StoreConfig({name: 'spezies'})
export class SpeziesStore extends EntityStore<SpeziesState, Spezies> {
  constructor() {
    super();
  }
}
