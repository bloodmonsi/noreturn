import { Component, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { SpeziesQuery, SpeziesStore, Spezies, SpeziesService } from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spezies',
  templateUrl: './spezies.component.html',
  styleUrls: ['./spezies.component.css']
})
export class SpeziesComponent implements OnInit {
  currentSpezies: ID;
  speziesList$: Observable<Spezies[]>;

  constructor(private store: SpeziesStore, private query: SpeziesQuery, private service: SpeziesService) {
  }

  ngOnInit() {
    this.speziesList$ = this.query.selectAll();
    this.query.selectActiveId().subscribe(selectedId => {
      if (selectedId != null && selectedId !== this.currentSpezies) {
        this.currentSpezies = selectedId;
      }
    });
  }

  speziesChanged(currentSpezies: number) {
    //this.store.setActive(currentSpezies);
    this.service.updateActiveSpezies(currentSpezies);
  }

}
