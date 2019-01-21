import { Powerlevel } from './powerlevel.model';
import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { PowerlevelStore } from './powerlevel.store';

@Injectable()
export class PowerlevelQuery extends Query<Powerlevel> {

  readonly name$ = this.select(powerlevel => powerlevel.name);

  constructor(protected store: PowerlevelStore) {
    super(store);
  }
}
