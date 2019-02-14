import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PowerlevelStore } from '../../store/index';
import { PowerlevelQuery } from '../../store/index';

@Component({
  selector: 'app-generation-points',
  templateUrl: './generation-points.component.html',
  styleUrls: ['./generation-points.component.css']
})
export class GenerationPointsComponent implements OnInit {

  // remainingPoints$: Observable<number>;
  maximumPoints$: Observable<number>;
  verbleibendePunkte$: Observable<number>;

  constructor(private store: PowerlevelStore, private query: PowerlevelQuery) {
  }

  ngOnInit() {
    // this.remainingPoints = this.chargenservice.getRemainingGenerationPoints();
    // this.maximumPoints = this.chargenservice.getMaximumPoints();
    this.maximumPoints$ = this.query.getMaximumGp$;
    // // this.remainingPoints$ = this.store.select(fromStore.ATTRIBUTESELECTORS.getRemainingPoints);
    // // this.store.select(POWERLEVELSELECTORS.getMaxPoints).subscribe(console.log);
    // this.verbleibendePunkte$ = this.store.select(fromStore.getVerbleibendePunkte);

  }

}
