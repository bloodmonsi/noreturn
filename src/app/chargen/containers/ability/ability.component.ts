import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { Fertigkeit } from '../../store/fertigkeiten/fertigkeiten.model';
import { ChargenQuery } from '../../store/chargen.query';
import { ChargenService } from '../../chargen.service';

@Component({
  selector: 'app-fertigkeiten',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {
  abilitiesTotalCosts$;
  dataSource: MyAbilityDatasource;
  dataColumns: string[];

  constructor(private chargenQuery: ChargenQuery, private chargenService: ChargenService) {
    this.dataSource = new MyAbilityDatasource(this.chargenQuery.getFertigkeitenList());
    this.dataColumns = ['increaseCosts', 'decreaseCosts', 'name', 'attribut', 'wert', 'maxWert', 'gesamtKosten'];
    this.abilitiesTotalCosts$ = this.chargenQuery.getFertigkeitenKosten();
  }

  ngOnInit() {

  }

  incrementFertigkeit(fertigkeitId: string) {
    this.chargenService.incrementFertigkeit(fertigkeitId);
  }

  decrementFertigkeit(fertigkeitId: string) {
    this.chargenService.decrementFertigkeit(fertigkeitId);
  }

}

// TODO: In eine Klasse packen....
export class MyAbilityDatasource extends DataSource <Fertigkeit> {
  constructor(private data: Observable<Fertigkeit[]>) {
    super();
  }

  connect() {
    return this.data;
  }

  disconnect() {
  }
}

