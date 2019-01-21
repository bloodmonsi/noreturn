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
  PowerlevelService, PowerlevelQuery, FertigkeitStore, FertigkeitQuery, FertigkeitService
} from './store';
import { HttpClient } from '@angular/common/http';
import { Konfiguration } from './store/core/konfiguration';


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
    FertigkeitService
  ]
})

export class ChargenModule {
  constructor(private http: HttpClient) {
    this.init();
  }

  init() {
    this.load().then(res => {

      AttributService.prototype.updateAttribut(res.attribute);
      SpeziesService.prototype.updateSpezies(res.spezies);
      FertigkeitService.prototype.updateFertigkeit(res.fertigkeiten);
      PowerlevelService.prototype.updatePowerlevel(res.powerlevel);
      // this.store.dispatch(new fromStore.FillSelectedSpeziesAction(res.defaultSpezies));
      // this.store.dispatch(new fromStore.FillSelectedPowerlevelAction(res.defaultPowerlevel));
    }).catch(e => {
      console.log(e);
    });
  }

  load() {
    return this.http.get<Konfiguration>('assets/data.json').toPromise();
  }
}
