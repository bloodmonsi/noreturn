import { Component, OnInit } from '@angular/core';
import { PowerlevelQuery, PowerlevelStore, Powerlevel } from '../../store/index';
import { Observable } from 'rxjs';
import { ID } from '@datorama/akita';
import {ChargenQuery} from '../../store/chargen.query';
import {ChargenService} from '../../chargen.service';

@Component({
  selector: 'app-powerlevel',
  templateUrl: './powerlevel.component.html',
  styleUrls: ['./powerlevel.component.css']
})
export class PowerlevelComponent implements OnInit {
  currentPowerlevel: string;
  powerlevels$: Observable<Powerlevel[]>;

  constructor(private chargenQuery: ChargenQuery, private chargenService: ChargenService) {}

  ngOnInit() {
    this.powerlevels$ = this.chargenQuery.getPowerlevelList();
    this.chargenQuery.getCurrentPowerlevel().subscribe(selectedId => {
      if (selectedId != null && selectedId !== this.currentPowerlevel) {
        this.currentPowerlevel = selectedId;
      }
    });
  }

  powerlevelChanged(currentPowerlevel: string) {
    this.chargenService.selektierePowerlevel(currentPowerlevel);
  }
}
