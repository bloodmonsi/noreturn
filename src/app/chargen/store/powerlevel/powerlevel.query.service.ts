import { Powerlevel } from './powerlevel.model';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { PowerlevelStore } from './powerlevel.store';
import { PowerlevelState } from './powerlevel.state';

@Injectable()
export class PowerlevelQuery extends QueryEntity<PowerlevelState, Powerlevel> {

  // readonly name$ = this.select(powerlevel => powerlevel.name);

  constructor(protected store: PowerlevelStore) {
    super(store);
  }

  readonly getMaximumGp$ = this.selectActive(entity => entity.gp);



}
