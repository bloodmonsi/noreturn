import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../store/index';
import { PowerlevelStore } from '../../store/index';

@Component({
  selector: 'app-powerlevel',
  templateUrl: './powerlevel.component.html',
  styleUrls: ['./powerlevel.component.css']
})
export class PowerlevelComponent implements OnInit {
  currentPowerlevel: number;
  powerlevels$;

  constructor(private store: PowerlevelStore) {}

  ngOnInit() {
    this.powerlevels$ = this.store.select(fromStore.POWERLEVELSELECTORS.getPowerlevelList);

    this.store.select(fromStore.POWERLEVELSELECTORS.getSelectedPowerlevelId).subscribe(selectedId => {

      this.currentPowerlevel = selectedId;

    });
  }

  powerlevelChanged(currentPowerlevel: number) {
    this.store.dispatch(new fromStore.FillSelectedPowerlevelAction(currentPowerlevel));
  }
}
