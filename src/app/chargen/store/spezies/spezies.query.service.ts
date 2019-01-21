import { Spezies } from './spezies.model';
import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { SpeziesStore } from './spezies.store';

@Injectable()
export class SpeziesQuery extends Query<Spezies> {

  readonly name$ = this.select(spezies => spezies.name);

  constructor(protected store: SpeziesStore) {
    super(store);
  }
}
