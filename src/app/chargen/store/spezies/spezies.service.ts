import { Injectable } from '@angular/core';
import { SpeziesStore } from './spezies.store';
import { Spezies } from './spezies.model';

@Injectable()
export class SpeziesService {

  constructor(private store: SpeziesStore) {
  }

  updateSpezies(spezies: Spezies[]) {
    this.store.set(spezies);
    this.store.setActive(spezies[0].id);
  }
}
