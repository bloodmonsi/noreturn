import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import * as fromStore from '../../store/index';
import { AttributQuery, AttributStore } from '../../store/index';
import { Observable } from 'rxjs';
import { Attribut } from '../../store/attribute/attribute.model';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  primaryAttributes$: Observable<Attribut[]>;
  secondaryAttributes$: Observable<Attribut[]>;
  attributesTotalCosts$;
  primaryDataSource: MyAttributeDatasource;
  secondaryDataSource: MyAttributeDatasource;
  dataColumns: string[];

  constructor(private store: AttributStore, private query: AttributQuery) {
    this.primaryDataSource = new MyAttributeDatasource(this.query.selectAll());
    this.secondaryDataSource = new MyAttributeDatasource(this.query.selectAll());
    this.dataColumns = [ 'increaseCosts', 'decreaseCosts', 'name', 'wert', 'maxWert', 'gesamtKosten'];
  }

  ngOnInit() {
    this.primaryAttributes$ = this.query.selectAll();
    this.secondaryAttributes$ = this.query.selectAll();
    // this.attributesTotalCosts$ = this.store.select(fromStore.ATTRIBUTESELECTORS.getAttributesTotalCosts);
  }

  incrementAttribute(entitieId: number) {
    // this.store.dispatch(new fromStore.IncrementAttributeAction(entitieId));
  }

  decrementAttribute(entitieId: number) {
    // this.store.dispatch(new fromStore.DecrementAttributeAction(entitieId));
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

