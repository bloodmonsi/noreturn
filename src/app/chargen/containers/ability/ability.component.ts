import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Attribut, FertigkeitQuery, FertigkeitStore } from '../../store/index';
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
  abilityList$: Observable<Fertigkeit[]>;
  abilitiesTotalCosts$;
  dataSource: MyAbilityDatasource;
  dataColumns: string[];

  constructor(private store: FertigkeitStore, private query: FertigkeitQuery, private chargenQuery: ChargenQuery,
              private chargenService: ChargenService) {
    this.dataSource = new MyAbilityDatasource(this.chargenQuery.getFertigkeitenList);
    this.dataColumns = ['increaseCosts', 'decreaseCosts', 'name', 'attribut', 'wert', 'maxWert', 'gesamtKosten'];
  }

  ngOnInit() {
    this.abilityList$ = this.chargenQuery.getFertigkeitenList();
    // this.abilitiesTotalCosts$ = this.store.select(fromStore.ABILITYSELECTORS.getAbilitiesTotalCosts);
  }

  incrementAbility(entitieId: number) {
    // this.store.dispatch(new fromStore.IncrementAbilityAction(entitieId));
  }

  decrementAbility(entitieId: number) {
    // this.store.dispatch(new fromStore.DecrementAbilityAction(entitieId));
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

