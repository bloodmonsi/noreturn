import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargenComponent } from './chargen.component';
import { ChargenRouting } from './chargen.routing';
import { GenerationPointsComponent } from './components/generation-points/generation-points.component';
import { PowerlevelComponent } from './components/powerlevel/powerlevel.component';
import { SharedModule } from '../shared/shared.module';
import { SpeziesComponent } from './components/spezies/spezies.component';
import { AbilityComponent } from './containers/ability/ability.component';
import { AttributeComponent } from './containers/attribute/attribute.component';
import { AttributeTableComponent } from './components/attribute-table/attribute-table.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { CharDetailsComponent } from './components/char-details/char-details.component';
import {
  ChargenStore
} from './store';
import { HttpClient } from '@angular/common/http';
import { Konfiguration } from './store/core/konfiguration';
import { ChargenService } from './chargen.service';
import { ChargenQuery } from './store/chargen.query';
import { BiologischeAbnormitaetenComponent } from './containers/biologische-abnormitaeten/biologische-abnormitaeten.component';


@NgModule({
  imports: [
    CommonModule,
    ChargenRouting,
    SharedModule,
  ],
  declarations: [ChargenComponent, GenerationPointsComponent, PowerlevelComponent, SpeziesComponent, AbilityComponent,
    OverviewComponent, CharDetailsComponent, AttributeComponent, AttributeTableComponent, BiologischeAbnormitaetenComponent],
  providers: [
    ChargenService,
    ChargenStore,
    ChargenQuery,
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
