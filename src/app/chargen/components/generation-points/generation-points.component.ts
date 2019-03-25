import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { PowerlevelStore, SpeziesQuery } from '../../store/index';
import { PowerlevelQuery } from '../../store/index';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-generation-points',
  templateUrl: './generation-points.component.html',
  styleUrls: ['./generation-points.component.css']
})
export class GenerationPointsComponent implements OnInit {

  // remainingPoints$: Observable<number>;
  maximumGp$: Observable<number>;
  verbleibendeGp$: Observable<number>;
  speziesGp$: Observable<number>;

  constructor(private store: PowerlevelStore, private powerlevelQuery: PowerlevelQuery, private speziesQuery: SpeziesQuery) {
  }

  ngOnInit() {
    // this.remainingPoints = this.chargenservice.getRemainingGenerationPoints();
    // this.maximumPoints = this.chargenservice.getMaximumPoints();
    this.maximumGp$ = this.powerlevelQuery.getMaximumGp$;
    this.speziesGp$ = this.speziesQuery.getSpeziesGp$;
    this.verbleibendeGp$ = this.getVerbleibendeGp();
  }

  getVerbleibendeGp() {
    const combined = combineLatest(this.maximumGp$, this.speziesGp$);
    return combined.pipe(map(([valueStream1, valueStream2]) => valueStream1 - valueStream2));
  }

}
