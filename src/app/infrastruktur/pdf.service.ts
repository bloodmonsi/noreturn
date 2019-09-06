import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ChargenQuery } from '../chargen/store/chargen.query';

declare const pdfform: any;

@Injectable()
export class PdfService {

  constructor(private http: HttpClient, private chargenQuery: ChargenQuery) {
  }

  // Wandelt ein Observable in ein Key-Value Parr um
  getCurrentObservableValue<T>(ob: Observable<T>): T {
    let value: T;

    ob.pipe(take(1)).subscribe(v => value = v);
    console.log(value);
    return value;
  }

  fillPdf() {
    this.http.get('assets/Charakterbogen.pdf', {responseType: 'arraybuffer'})
      .subscribe((data: ArrayBuffer) => {
        const fields = {
          'Alter': ['50']
        };

        // const fields = this.getCurrentObservableValue(this.chargenQuery.getWerteFuerPdf());

        const outPdf = pdfform().transform(data, fields);
        const blob = new Blob([outPdf], {type: 'application/pdf'});
        const objectUrl = URL.createObjectURL(blob);
        window.open(objectUrl);
      });
  }
}
