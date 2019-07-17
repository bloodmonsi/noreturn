import { Injectable } from '@angular/core';
import { AttributStore } from './attribute.store';
import { Attribut } from './attribute.model';
import { SpeziesQuery } from '../spezies/spezies.query.service';

@Injectable()
export class AttributService {

  constructor(private store: AttributStore, private speziesQuery: SpeziesQuery) {
  }

  updateAttribut(attribut: Attribut[]) {
    console.log('######');
    console.log(attribut);

    attribut.forEach(a => a.wert = 0);
    this.store.set(attribut);
  }

  incrementAttribut(attributID: string) {
    this.store.update(attributID, entitaet => ({
      wert: entitaet.wert + 1
    }));
  }

  decrementAttribut(attributID: string) {
    this.store.update(attributID, entitaet => ({
      wert: entitaet.wert - 1
    }));
  }

  // setzeStartwerte(attributID: string) {
  //   const activeSpezies$ = this.speziesQuery.getActiveSpezies$;
  //   this.store.update(attributID, entitaet => ({
  //     wert: activeSpezies$[attributID + 'Start']
  //   }));
  // }

}
