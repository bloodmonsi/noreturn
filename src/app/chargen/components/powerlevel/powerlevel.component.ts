import { Component, OnInit } from '@angular/core';
import { PowerlevelQuery, PowerlevelStore, Powerlevel } from '../../store/index';
import { Observable } from 'rxjs';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-powerlevel',
  templateUrl: './powerlevel.component.html',
  styleUrls: ['./powerlevel.component.css']
})
export class PowerlevelComponent implements OnInit {
  currentPowerlevel: ID;
  powerlevels$: Observable<Powerlevel[]>;

  constructor(private store: PowerlevelStore, private query: PowerlevelQuery) {}

  ngOnInit() {
    this.powerlevels$ = this.query.selectAll();
    // todo: unsubscribe weil Memoryleak
    this.query.selectActiveId().subscribe(selectedId => {
      if (selectedId != null && selectedId !== this.currentPowerlevel) {
        this.currentPowerlevel = selectedId;
      }
    });
  }

  powerlevelChanged(currentPowerlevel: number) {
    this.store.setActive(currentPowerlevel);
  }
}
