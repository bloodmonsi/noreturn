import { Injectable } from '@angular/core';
import { FertigkeitStore } from './fertigkeiten.store';
import { Fertigkeit } from './fertigkeiten.model';

@Injectable()
export class FertigkeitService {

  constructor(private store: FertigkeitStore) {
  }

  updateFertigkeit(fertigkeiten: Fertigkeit[]) {
    this.store.set(fertigkeiten);

    // this.store.update(4, (fertigkeit:Fertigkeit) => ({
    //   wert: fertigkeit.wert + 1
    //   });
    //
    // );
  }
}
