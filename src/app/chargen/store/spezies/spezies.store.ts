import { Store, StoreConfig } from '@datorama/akita';
import { Spezies, erstelleSpezies } from './spezies.model';

const initialState: Spezies = erstelleSpezies({name: 'bla', kosten: 30});

@StoreConfig({name: 'spezies'})
export class SpeziesStore extends Store<Spezies> {
  constructor() {
    super(initialState);
  }
}
