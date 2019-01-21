import { Attribut } from './attribute.model';
import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { AttributStore } from './attribute.store';

@Injectable()
export class AttributQuery extends Query<Attribut> {

  readonly name$ = this.select(attribut => attribut.name);

  constructor(protected store: AttributStore) {
    super(store);
  }
}
