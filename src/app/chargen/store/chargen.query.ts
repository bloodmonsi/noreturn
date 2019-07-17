import { Injectable } from '@angular/core';
import { ChargenState, ChargenStore } from './chargen.store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Query } from '@datorama/akita';

@Injectable()
export class ChargenQuery extends Query<ChargenState> {
  constructor(chargenStore: ChargenStore) {
    super(chargenStore);
  }

  selectStartwertePrimaryAttribut() {
    return this.select(state => {
      const attribute = Object.values(state.attribute);
      const activeSpezies = state.spezies[state.currentSpezies];

      return attribute.map(attribut => {
        // const id = attribut.id as string;
        const keyPrefix = attribut.id;
        const maxKey = keyPrefix + 'Max';
        const wert = attribut.wert;
        const maxWert = activeSpezies[maxKey];

        return {
          ...attribut,
          wert,
          maxWert,
          gesamtKosten: wert * attribut.kosten
        };
      });
    });
  }
}
