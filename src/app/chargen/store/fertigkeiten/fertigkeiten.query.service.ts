import { Fertigkeit } from './fertigkeiten.model';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { FertigkeitStore } from './fertigkeiten.store';
import { FertigkeitState } from './fertigkeiten.state';

@Injectable()
export class FertigkeitQuery extends QueryEntity<FertigkeitState, Fertigkeit> {

  // readonly name$ = this.select(fertigkeit => fertigkeit.name);

  constructor(protected store: FertigkeitStore) {
    super(store);
  }
}
