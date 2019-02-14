import { Injectable } from '@angular/core';
import { AttributStore } from './attribute.store';
import { Attribut } from './attribute.model';
import { increment } from '@datorama/akita';

@Injectable()
export class AttributService {

  constructor(private store: AttributStore) {
  }

  updateAttribut(attribute: Attribut[]) {
    this.store.set(attribute);
  }
  //
  // incrementAttribut(attribut: Attribut) {
  //   this.store.update(attribut => ({
  //     wert: increment(attribut.)
  //   }));
  // }
}
