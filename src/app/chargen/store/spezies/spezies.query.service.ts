import { Spezies } from './spezies.model';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { SpeziesStore } from './spezies.store';
import { SpeziesState } from './spezies.state';

@Injectable()
export class SpeziesQuery extends QueryEntity<SpeziesState, Spezies> {

  // readonly name$ = this.select(spezies => spezies.name);

  constructor(protected store: SpeziesStore) {
    super(store);
  }
}
