import { Store, StoreConfig } from '@datorama/akita';
import { Attribut, erstelleAttribut } from './attribute.model';

const initialState: Attribut = erstelleAttribut({name: 'Bob', kosten: 10});

@StoreConfig({name: 'attribut'})
export class AttributStore extends Store<Attribut> {
  constructor() {
    super(initialState);
  }
}
