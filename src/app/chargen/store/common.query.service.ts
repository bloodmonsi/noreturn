import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PowerlevelQuery } from './powerlevel/powerlevel.query.service';
import { SpeziesQuery } from './spezies/spezies.query.service';

@Injectable()
export class CommonQuery {

  // readonly name$ = this.select(fertigkeit => fertigkeit.name);

  constructor(private speziesQuery: SpeziesQuery, private powerlevelQuery: PowerlevelQuery) {
  }

  speziesGp$: Observable<number>;
  maximumGp$: Observable<number>;


  getVerbleibendeGp() {
    this.speziesGp$ = this.speziesQuery.getSpeziesGp$;
    this.maximumGp$ = this.powerlevelQuery.getMaximumGp$;
    const combined = combineLatest(this.maximumGp$, this.speziesGp$);
    return combined.pipe(map(([valueStream1, valueStream2]) => valueStream1 - valueStream2));
  }


}
