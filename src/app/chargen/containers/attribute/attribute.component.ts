import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { Attribut } from '../../store/attribute/attribute.model';
import { ChargenQuery } from '../../store/chargen.query';
import { ChargenService } from '../../chargen.service';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  attributesTotalCosts$;
  primaryDataSource: MyAttributeDatasource;
  secondaryDataSource: MyAttributeDatasource;
  dataColumns: string[];

  constructor(private chargenService: ChargenService, private chargenQuery: ChargenQuery) {
    this.primaryDataSource = new MyAttributeDatasource(this.chargenQuery.selectStartwertePrimaryAttribut());
    this.secondaryDataSource = new MyAttributeDatasource(this.chargenQuery.selectStartwerteSecondaryAttribut());
    this.dataColumns = [ 'increaseCosts', 'decreaseCosts', 'name', 'wert', 'maxWert', 'gesamtKosten'];
    this.attributesTotalCosts$ = this.chargenQuery.getAttributKosten();
  }

  ngOnInit() {}

  incrementAttribute(entitieId: string) {
    this.chargenService.incrementAttribut(entitieId);
  }

  decrementAttribute(entitieId: string) {
    this.chargenService.decrementAttribut(entitieId);
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

