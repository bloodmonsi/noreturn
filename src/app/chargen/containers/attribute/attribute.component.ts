import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { AttributQuery, AttributService, AttributStore, Spezies } from '../../store/index';
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
  // attributeStartwerte$: Spezies;

  constructor(private store: AttributStore, private query: AttributQuery, private service: AttributService) {
    this.primaryDataSource = new MyAttributeDatasource(this.query.getStartwertePrimaryAttribut());
    this.secondaryDataSource = new MyAttributeDatasource(this.query.getStartwerteSecondaryAttribut());
    this.dataColumns = [ 'increaseCosts', 'decreaseCosts', 'name', 'wert', 'maxWert', 'gesamtKosten'];
  }

  ngOnInit() {
    this.primaryAttributes$ = this.query.primaryAttributList$;
    this.secondaryAttributes$ = this.query.secondaryAttributList$;
    // this.attributeStartwerte$ = this.query.getStartwerte();
  }

  incrementAttribute(entitieId: string) {
    this.service.incrementAttribut(entitieId);
  }

  decrementAttribute(entitieId: string) {
    this.service.decrementAttribut(entitieId);
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

