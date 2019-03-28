import { Attribut } from './attribute.model';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { AttributStore } from './attribute.store';
import { AttributeState } from './attribute.state';
import { SpeziesQuery } from '..';
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


      // return valueStream1 - valueStream2;
      // ToDO
      return (valueStream1 || 0) - (valueStream2 || 0);
    }));
    // return this.speziesQuery.selectAll().pipe(map(entities => entities.map));
    // return this.activeSpezies$;
  }
}
