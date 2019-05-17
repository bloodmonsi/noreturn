import { Attribut } from './attribute.model';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { AttributStore } from './attribute.store';
import { AttributeState } from './attribute.state';
import { SpeziesQuery } from '../spezies/spezies.query.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AttributQuery extends QueryEntity<AttributeState, Attribut> {

  readonly primaryAttributList$ = this.selectAll({
    filterBy: attribute => attribute.primaer
  });

  readonly secondaryAttributList$ = this.selectAll({
    filterBy: attribute => !attribute.primaer
  });

  readonly activeSpezies$ = this.speziesQuery.getActiveSpezies$;

  constructor(protected store: AttributStore, private speziesQuery: SpeziesQuery) {
    super(store);
  }

  getStartwerte() {
    const combined = combineLatest(this.primaryAttributList$, this.activeSpezies$);
    return combined.pipe(map(([attributList, activeSpezies]) => {
      return attributList.map(attribut => {
        const id = attribut.id as string;
        const keyPrefix = attribut.id;
        // const startKey = keyPrefix + 'Start';
        const maxKey = keyPrefix + 'Max';
        // const startValue = activeSpezies[startKey];
        console.log('Bob ' + activeSpezies[maxKey]);
        const maxWert = activeSpezies[maxKey];
        console.log('Bla ' + attribut.wert);
        return {
          ...attribut,
          // startValue,
          maxWert,
          gesamtKosten: attribut.wert * attribut.kosten
        };
      });
    }));
    // return this.speziesQuery.selectAll().pipe(map(entities => entities.map));
    // return this.activeSpezies$;
  }
}
