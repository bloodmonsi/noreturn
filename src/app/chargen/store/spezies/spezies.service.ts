import { Injectable } from '@angular/core';
import { SpeziesStore } from './spezies.store';
import { Spezies } from './spezies.model';
import { AttributService } from '../attribute/attribute.service';

@Injectable()
export class SpeziesService {

  constructor(private store: SpeziesStore, private attributService: AttributService) {
  }

  updateSpezies(spezies: Spezies[]) {
    this.store.set(spezies);
    this.store.setActive(spezies[0].id);
  }

  updateActiveSpezies(currentSprezies: number) {
    console.log('Spezies_ID :' + currentSprezies);
    this.store.setActive(currentSprezies);

    // spezies[0].chStart
    // this.attributService.setzeStartwerte('ge');
    // this.attributService.setzeStartwerte('st');
    // this.attributService.setzeStartwerte('ko');
    // this.attributService.setzeStartwerte('sk');
    // this.attributService.setzeStartwerte('wi');
    // this.attributService.setzeStartwerte('wa');
    // this.attributService.setzeStartwerte('ch');
    // this.attributService.setzeStartwerte('lo');
    // this.attributService.setzeStartwerte('fa');
    // this.attributService.setzeStartwerte('to');
  }
}
