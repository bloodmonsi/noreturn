import { Component, OnInit } from '@angular/core';
import {Abnormitaeten, Attribut, ChargenQuery} from '../../store';
import {ChargenService} from '../../chargen.service';
import {combineLatest, Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {DataSource} from '@angular/cdk/table';
import {MyAbilityDatasource} from '../ability';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-biologische-abnormitaeten',
  templateUrl: './biologische-abnormitaeten.component.html',
  styleUrls: ['./biologische-abnormitaeten.component.css']
})
export class BiologischeAbnormitaetenComponent implements OnInit {
  // abnormitaetenTotalCosts$;
  dataSource: MyAbnormitaetenDatasource;
  dataColumns: string[];
  abnormitaeten: Abnormitaeten[];
  selectedAbnormitaet: string;

  constructor(private chargenQuery: ChargenQuery, private chargenService: ChargenService) {
    this.abnormitaeten = this.getCurrentObservableValue(this.chargenQuery.getAbnormitaetenList());
    this.dataSource = new MyAbnormitaetenDatasource(this.chargenQuery.getSelectedAbnormitaetenList());
    this.dataColumns = ['name', 'kosten'];
    // this.abnormitaetenTotalCosts$ = this.chargenQuery.getAbnormitaetenKosten();

  }

  ngOnInit() {

  }

  getCurrentObservableValue<T>(ob: Observable<T>): T {
    let value: T;

    ob.pipe(take(1)).subscribe(v => value = v);
    // console.log(value);
    return value;
  }

  selectAbnormitaet(abnormitaetenId: string) {
    this.chargenService.selectAbnormitaet(abnormitaetenId);
  }

  decrementAbnormitaeten(abnormitaetenId: string) {
    // this.chargenService.decrementAbnormitaeten(abnormitaetenId);
  }

}

export class MyAbnormitaetenDatasource extends DataSource <Abnormitaeten> {
  constructor(private data: Observable<Abnormitaeten[]>) {
    super();
  }
  connect() {
    return this.data;
  }

  disconnect() {}
}




