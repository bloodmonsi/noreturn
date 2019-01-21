import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NoreturnState } from '../../../noreturnstate';
import * as fromStore from '../../store/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-generation-points',
  templateUrl: './generation-points.component.html',
  styleUrls: ['./generation-points.component.css']
})
export class GenerationPointsComponent implements OnInit {

  // remainingPoints$: Observable<number>;
  maximumPoints$: Observable<number>;
  verbleibendePunkte$: Observable<number>;

  constructor(private store: Store<NoreturnState>) { }

  ngOnInit() {
    // this.remainingPoints = this.chargenservice.getRemainingGenerationPoints();
    // this.maximumPoints = this.chargenservice.getMaximumPoints();
    this.maximumPoints$ = this.store.select(fromStore.POWERLEVELSELECTORS.getMaxPoints);
    // this.remainingPoints$ = this.store.select(fromStore.ATTRIBUTESELECTORS.getRemainingPoints);
    // this.store.select(POWERLEVELSELECTORS.getMaxPoints).subscribe(console.log);
    this.verbleibendePunkte$ = this.store.select(fromStore.getVerbleibendePunkte);

  }

}
