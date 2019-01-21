import { Injectable } from '@angular/core';
import { AttributStore } from './attribute.store';
import { Attribut } from './attribute.model';

@Injectable()
export class AttributService {

  constructor(private store: AttributStore) {
  }

  updateAttribut(attribute: Attribut) {
    this.store.update({
      id: attribute.id,
      name: attribute.name,
      kurzName: attribute.kurzName,
      kosten: attribute.kosten,
      primaer: attribute.primaer
    });
  }
}
