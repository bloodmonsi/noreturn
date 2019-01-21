import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Attribut } from '../../../../../core/entities/index';
import * as fromStore from '../../store/index';
import { AttributStore } from '../../store/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  primaryAttributes$;
  secondaryAttributes$;
  attributesTotalCosts$;
  primaryDataSource: MyAttributeDatasource;
  secondaryDataSource: MyAttributeDatasource;
  dataColumns: string[];

  constructor(private store: AttributStore) {
    this.primaryDataSource = new MyAttributeDatasource(<any>this.store.select(fromStore.ATTRIBUTESELECTORS.getPrimaryAttributeList));
    this.secondaryDataSource = new MyAttributeDatasource(this.store.select(fromStore.ATTRIBUTESELECTORS.getSecondaryAttributeList));
    this.dataColumns = [ 'increaseCosts', 'decreaseCosts', 'name', 'wert', 'maxWert', 'gesamtKosten'];
  }

  ngOnInit() {
    this.primaryAttributes$ = this.store.select(fromStore.ATTRIBUTESELECTORS.getPrimaryAttributeList);
    this.secondaryAttributes$ = this.store.select(fromStore.ATTRIBUTESELECTORS.getSecondaryAttributeList);
    this.attributesTotalCosts$ = this.store.select(fromStore.ATTRIBUTESELECTORS.getAttributesTotalCosts);
  }

  incrementAttribute(entitieId: number) {
    this.store.dispatch(new fromStore.IncrementAttributeAction(entitieId));
  }

  decrementAttribute(entitieId: number) {
    this.store.dispatch(new fromStore.DecrementAttributeAction(entitieId));
  }
}

// TODO: In eine Klasse packen....
export class MyAttributeDatasource extends DataSource <Attribut> {
  constructor(private data: Observable<Attribut[]>) {
    super();
  }
  connect() {
    return this.data;
  }

  disconnect() {}
}

