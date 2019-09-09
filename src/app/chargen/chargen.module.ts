import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargenComponent } from './chargen.component';
import { ChargenRouting } from './chargen.routing';
import { GenerationPointsComponent } from './components/generation-points';
import { PowerlevelComponent } from './components/powerlevel';
import { SharedModule } from '../shared/shared.module';
import { SpeziesComponent } from './components/spezies';
import { AbilityComponent } from './containers/ability';
import { AttributeComponent } from './containers/attribute/attribute.component';
import { AttributeTableComponent } from './components/attribute-table';
import { OverviewComponent } from './containers/overview';
import { CharDetailsComponent } from './components/char-details';
import {
  ChargenStore
} from './store';
import { HttpClient } from '@angular/common/http';
import { Konfiguration, ChargenQuery } from './store';
import { ChargenService } from './chargen.service';
import { BiologischeAbnormitaetenComponent } from './containers/biologische-abnormitaeten/biologische-abnormitaeten.component';
import { PdfService } from '../infrastruktur';


@NgModule({
  imports: [
    CommonModule,
    ChargenRouting,
    SharedModule
  ],
  declarations: [ChargenComponent, GenerationPointsComponent, PowerlevelComponent, SpeziesComponent, AbilityComponent,
    OverviewComponent, CharDetailsComponent, AttributeComponent, AttributeTableComponent, BiologischeAbnormitaetenComponent],
  providers: [
    ChargenService,
    ChargenStore,
    ChargenQuery,
    PdfService,
  ]
})

export class ChargenModule {
  constructor(private http: HttpClient, private chargenService: ChargenService) {
    this.init();
  }

  init() {
    this.load().then(res => {
      this.chargenService.init(res.attribute, res.powerlevel, res.spezies, res.fertigkeiten, res.biologischeAbnormitaeten);

    }).catch(e => {
      console.log(e);
    });
  }

  load() {
    return this.http.get<Konfiguration>('assets/data.json').toPromise();
  }
}
