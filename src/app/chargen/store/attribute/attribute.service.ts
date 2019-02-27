import { Injectable } from '@angular/core';
import { AttributStore } from './attribute.store';
import { Attribut } from './attribute.model';

@Injectable()
export class AttributService {

  constructor(private store: AttributStore) {
  }

  updateAttribut(attribute: Attribut[]) {
    this.store.set(attribute);
  }

  incrementAttribut(attributID: number) {
    this.store.update(attributID, entitaet => ({
      wert: entitaet.wert + 1
    }));
  }
}
