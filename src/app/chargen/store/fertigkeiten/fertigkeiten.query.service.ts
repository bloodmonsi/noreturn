import { Fertigkeit } from './fertigkeiten.model';
import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { FertigkeitStore } from './fertigkeiten.store';

@Injectable()
export class FertigkeitQuery extends Query<Fertigkeit> {

  readonly name$ = this.select(fertigkeit => fertigkeit.name);

  constructor(protected store: FertigkeitStore) {
    super(store);
  }
}
