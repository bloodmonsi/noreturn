import { Injectable } from '@angular/core';
import { FertigkeitStore } from './fertigkeiten.store';
import { Fertigkeit } from './fertigkeiten.model';

@Injectable()
export class FertigkeitService {

  constructor(private store: FertigkeitStore) {
  }

  updateFertigkeit(fertigkeiten: Fertigkeit) {
    this.store.update({
      id: fertigkeiten.id,
      name: fertigkeiten.name,
      attribut: fertigkeiten.attribut,
      input: fertigkeiten.input,
      wert: fertigkeiten.wert
    });
  }
}
