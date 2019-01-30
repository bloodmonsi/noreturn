import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Attribut, FertigkeitQuery, FertigkeitStore } from '../../store/index';
import { Observable } from 'rxjs';
import { Fertigkeit } from '../../store/fertigkeiten/fertigkeiten.model';

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

  constructor(private store: FertigkeitStore, private query: FertigkeitQuery) {
    this.dataSource = new MyAbilityDatasource(this.query.selectAll());
    this.dataColumns = ['increaseCosts', 'decreaseCosts', 'name', 'attribut', 'wert', 'maxWert', 'gesamtKosten'];
  }

  ngOnInit() {
    this.abilityList$ = this.query.selectAll();
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

