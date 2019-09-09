import { Component, OnInit } from '@angular/core';
import { Spezies } from '../../store';
import { Observable } from 'rxjs';
import { ChargenService } from '../../chargen.service';
import { ChargenQuery } from '../../store/chargen.query';

@Component({
  selector: 'app-spezies',
  templateUrl: './spezies.component.html',
  styleUrls: ['./spezies.component.css']
})
export class SpeziesComponent implements OnInit {
  currentSpezies: string;
  speziesList$: Observable<Spezies[]>;

  constructor(private chargenService: ChargenService, private chargenQuery: ChargenQuery) {
  }

  ngOnInit() {
    this.speziesList$ = this.chargenQuery.getSpeziesList();

    this.chargenQuery.getCurrentSpezies().subscribe(selectedId => {
      if (selectedId != null && selectedId !== this.currentSpezies) {
            this.currentSpezies = selectedId;
          }
    });
  }

  speziesChanged(currentSpezies: string) {
    this.chargenService.selektiereSpezies(currentSpezies);
  }

}
