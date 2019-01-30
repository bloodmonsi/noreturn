import { EntityStore, StoreConfig } from '@datorama/akita';
import { Fertigkeit } from './fertigkeiten.model';
import { FertigkeitState } from './fertigkeiten.state';

@StoreConfig({name: 'fertigkeit'})
export class FertigkeitStore extends EntityStore<FertigkeitState, Fertigkeit> {
  constructor() {
    super();
  }
}
