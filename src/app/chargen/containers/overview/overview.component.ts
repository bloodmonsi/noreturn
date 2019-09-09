import { Component, OnInit } from '@angular/core';
import { PdfService } from '../../../infrastruktur';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private pdfService: PdfService) { }

  ngOnInit() {
  }

  downloadPDF(): void {
    this.pdfService.fillPdf();
  }
}
