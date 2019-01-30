import { EntityStore, StoreConfig } from '@datorama/akita';
import { Attribut } from './attribute.model';
import { AttributeState } from './attribute.state';

@StoreConfig({name: 'attribut'})
export class AttributStore extends EntityStore<AttributeState, Attribut> {
  constructor() {
    super();
  }
}
