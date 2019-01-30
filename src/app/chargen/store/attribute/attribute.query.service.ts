import { Attribut } from './attribute.model';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { AttributStore } from './attribute.store';
import { AttributeState } from './attribute.state';

@Injectable()
export class AttributQuery extends QueryEntity<AttributeState, Attribut> {

  // readonly name$ = this.select(attribut => attribut.name);

  constructor(protected store: AttributStore) {
    super(store);
  }
}
