import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@datorama/akita';
import { SpeziesStore } from '../../store/spezies/spezies.store';

@Component({
  selector: 'app-spezies',
  templateUrl: './spezies.component.html',
  styleUrls: ['./spezies.component.css']
})
export class SpeziesComponent implements OnInit {
  currentSpezies: number;
  speziesList$;

  constructor(private store: Store<SpeziesStore>) { }

  ngOnInit() {
    this.speziesList$ = this.store.select(fromStore.SPEZIESSELECTORS.getSpeziesList);

    this.store.select(fromStore.SPEZIESSELECTORS.getSelectedSpeziesId).subscribe(selectedId => {
      if (selectedId != null && selectedId !== this.currentSpezies) {
        this.currentSpezies = selectedId;
      }
    });
  }

  speziesChanged(currentSpezies: number) {
    this.store.dispatch(new fromStore.FillSelectedSpeziesAction(currentSpezies));
  }

}
