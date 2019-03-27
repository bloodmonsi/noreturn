import { Attribut } from './attribute.model';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { AttributStore } from './attribute.store';
import { AttributeState } from './attribute.state';
import { SpeziesQuery } from '..';
import { map } from 'rxjs/operators';

@Injectable()
export class AttributQuery extends QueryEntity<AttributeState, Attribut> {

  // readonly name$ = this.select(attribut => attribut.name);

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

    // return this.speziesQuery.selectAll().pipe(map(entities => entities.map));
    return this.activeSpezies$;
  }

}
