import { Attribut } from './attribute.model';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { AttributStore } from './attribute.store';
import { AttributeState } from './attribute.state';

@Injectable()
export class AttributQuery extends QueryEntity<AttributeState, Attribut> {

  readonly primaryAttributList$ = this.selectAll({
    filterBy: attribute => attribute.primaer
  });
  readonly secondaryAttributList$ = this.selectAll({
    filterBy: attribute => !attribute.primaer
  });

  // readonly activeSpezies$ = this.speziesQuery.getActiveSpezies$;

  constructor(protected store: AttributStore) {
    super(store);
  }

  // getStartwerte() {
  //
  //   // return this.speziesQuery.selectAll().pipe(map(entities => entities.map));
  //   return this.activeSpezies$;
  // }
}
