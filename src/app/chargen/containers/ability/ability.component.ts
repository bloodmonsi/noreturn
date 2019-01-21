import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Fertigkeit } from '../../../../../core/entities/index';
import * as fromStore from '../../store/index';
import { FertigkeitStore } from '../../store/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fertigkeiten',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {
  abilityList$;
  abilitiesTotalCosts$;
  dataSource: MyAbilityDatasource;
  dataColumns: string[];

  constructor(private store: FertigkeitStore) {
    this.dataSource = new MyAbilityDatasource(this.store.select(fromStore.ABILITYSELECTORS.getAbilityList));
    this.dataColumns = [ 'increaseCosts', 'decreaseCosts', 'name', 'attribut', 'wert', 'maxWert', 'gesamtKosten'];
  }

  ngOnInit() {
    this.abilityList$ = this.store.select(fromStore.ABILITYSELECTORS.getAbilityList);
    this.abilitiesTotalCosts$ = this.store.select(fromStore.ABILITYSELECTORS.getAbilitiesTotalCosts);
  }

  incrementAbility(entitieId: number) {
    this.store.dispatch(new fromStore.IncrementAbilityAction(entitieId));
  }

  decrementAbility(entitieId: number) {
    this.store.dispatch(new fromStore.DecrementAbilityAction(entitieId));
  }

}

// TODO: In eine Klasse packen....
export class MyAbilityDatasource extends DataSource <Fertigkeit> {
  constructor(private data: Observable<Fertigkeit[]>){
    super();
  }
  connect() {
    return this.data;
  }

  disconnect() {}
}

