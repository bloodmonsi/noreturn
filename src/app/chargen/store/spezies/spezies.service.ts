import { Injectable } from '@angular/core';
import { SpeziesStore } from './spezies.store';
import { Spezies } from './spezies.model';

@Injectable()
export class SpeziesService {

  constructor(private store: SpeziesStore) {
  }

  updateSpezies(spezies: Spezies) {
    this.store.update({
      id: spezies.id,
      name: spezies.name,
      kosten: spezies.kosten,
      geStart: spezies.geStart,
      geMax: spezies.geMax,
      stStart: spezies.stStart,
      stMax: spezies.stMax,
      koStart: spezies.koStart,
      koMax: spezies.koMax,
      skStart: spezies.skStart,
      skMax: spezies.stMax,
      wiStart: spezies.wiStart,
      wiMax: spezies.wiMax,
      waStart: spezies.waStart,
      waMax: spezies.waMax,
      chStart: spezies.chStart,
      chMax: spezies.chMax,
      loStart: spezies.loStart,
      loMax: spezies.loMax,
      faStart: spezies.faStart,
      faMax: spezies.faMax,
      toStart: spezies.toStart,
      toMax: spezies.toMax,
      organismus: spezies.organismus,
      psyche: spezies.psyche,
      adrenalin: spezies.adrenalin,
      mutationspunkte: spezies.mutationspunkte,
      infektionW6: spezies.infektionW6,
      infektionPunkt: spezies.infektionPunkt,
      note: spezies.note,
      psi: spezies.psi,
      psiBonus: spezies.psiBonus,
      psiStart: spezies.psiStart
    });
  }
}
