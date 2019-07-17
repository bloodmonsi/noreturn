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
  SpeziesService,
  AttributService,
  AttributStore,
  AttributQuery,
  SpeziesStore,
  SpeziesQuery,
  PowerlevelStore,
  PowerlevelService, PowerlevelQuery, FertigkeitStore, FertigkeitQuery, FertigkeitService, ChargenStore
} from './store';
import { HttpClient } from '@angular/common/http';
import { Konfiguration } from './store/core/konfiguration';
import { CommonQuery } from './store/common.query.service';
import { ChargenService } from './chargen.service';
import { ChargenQuery } from './store/chargen.query';


@NgModule({
  imports: [
    CommonModule,
    ChargenRouting,
    SharedModule,
  ],
  declarations: [ChargenComponent, GenerationPointsComponent, PowerlevelComponent, SpeziesComponent, AbilityComponent,
    OverviewComponent, CharDetailsComponent, AttributeComponent, AttributeTableComponent],
  providers: [
    AttributService,
    AttributStore,
    AttributQuery,
    SpeziesService,
    SpeziesStore,
    SpeziesQuery,
    PowerlevelStore,
    PowerlevelService,
    PowerlevelQuery,
    FertigkeitStore,
    FertigkeitQuery,
    FertigkeitService,
    CommonQuery,
    ChargenService,
    ChargenStore,
    ChargenQuery,
  ]
})

export class ChargenModule {
  constructor(private http: HttpClient, private powerlevelService: PowerlevelService,
              private speziesService: SpeziesService, private attributService: AttributService,
              private fertigkeitService: FertigkeitService, private chargenService: ChargenService) {
    this.init();
  }

  init() {
    this.load().then(res => {
      this.attributService.updateAttribut(res.attribute);
      this.speziesService.updateSpezies(res.spezies);
      this.fertigkeitService.updateFertigkeit(res.fertigkeiten);
      this.powerlevelService.updatePowerlevel(res.powerlevel);

      this.chargenService.init(res.attribute, res.powerlevel, res.spezies);

    }).catch(e => {
      console.log(e);
    });
  }

  load() {
    return this.http.get<Konfiguration>('assets/data.json').toPromise();
  }
}
