import { Injectable } from '@angular/core';
import { PowerlevelStore } from './powerlevel.store';
import { Powerlevel } from './powerlevel.model';

@Injectable()
export class PowerlevelService {

  constructor(private store: PowerlevelStore) {
  }

  updatePowerlevel(powerlevel: Powerlevel[]) {
    this.store.set(powerlevel);
    this.store.setActive(powerlevel[1].id);
  }
}
