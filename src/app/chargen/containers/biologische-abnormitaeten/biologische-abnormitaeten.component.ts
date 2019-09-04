import { Component, OnInit } from '@angular/core';
import {MyAbilityDatasource} from '../ability';
import {ChargenQuery} from '../../store/chargen.query';
import {ChargenService} from '../../chargen.service';
import {DataSource} from '@angular/cdk/table';
import {Abnormitaeten} from '../../store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-biologische-abnormitaeten',
  templateUrl: './biologische-abnormitaeten.component.html',
  styleUrls: ['./biologische-abnormitaeten.component.css']
})
export class BiologischeAbnormitaetenComponent implements OnInit {
  abnormitaetenTotalCosts$;
  dataSource: MyAbilityDatasource;
  dataColumns: string[];

  constructor(private chargenQuery: ChargenQuery, private chargenService: ChargenService) {
    this.dataSource = new MyAbilityDatasource(this.chargenQuery.getAbnormitaetenList());
    this.dataColumns = ['increaseCosts', 'decreaseCosts', 'name', 'wert', 'gesamtKosten'];
    // this.abnormitaetenTotalCosts$ = this.chargenQuery.getAbnormitaetenKosten();
  }

  ngOnInit() {
  }

  incrementAbnormitaeten(abnormitaetenId: string) {
    // this.chargenService.incrementAbnormitaeten(abnormitaetenId);
  }

  decrementAbnormitaeten(abnormitaetenId: string) {
    // this.chargenService.decrementAbnormitaeten(abnormitaetenId);
  }

}

// TODO: In eine Klasse packen....
export class MyAbilityDatasource extends DataSource <Abnormitaeten> {
  constructor(private data: Observable<Abnormitaeten[]>) {
    super();
  }

  connect() {
    return this.data;
  }

  disconnect() {
  }
}
