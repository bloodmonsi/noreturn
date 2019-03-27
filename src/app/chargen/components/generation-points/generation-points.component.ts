import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PowerlevelStore } from '../../store/index';
import { PowerlevelQuery } from '../../store/index';
import { CommonQuery } from '../../store/common.query.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-generation-points',
  templateUrl: './generation-points.component.html',
  styleUrls: ['./generation-points.component.css']
})
export class GenerationPointsComponent implements OnInit {

  // remainingPoints$: Observable<number>;
  maximumGp$: Observable<number>;
  verbleibendeGp$: Observable<number>;

  constructor(private store: PowerlevelStore, private powerlevelQuery: PowerlevelQuery, private commonQuery: CommonQuery) {
  }

  ngOnInit() {
    // this.remainingPoints = this.chargenservice.getRemainingGenerationPoints();
    // this.maximumPoints = this.chargenservice.getMaximumPoints();

    // setTimeout(() => {
      this.maximumGp$ = this.powerlevelQuery.getMaximumGp$.pipe(tap(value => console.log('max gp', value)));
      this.verbleibendeGp$ = this.commonQuery.getVerbleibendeGp().pipe(tap(value => console.log('verbleibende gp', value)));
    // });

  }


}
