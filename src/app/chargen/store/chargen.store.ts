import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Attribut } from './attribute/attribute.model';
import { Spezies } from './spezies/spezies.model';
import { Powerlevel } from './powerlevel/powerlevel.model';
import { Fertigkeit } from './fertigkeiten/fertigkeiten.model';

export interface ChargenState {
  attribute: { [id: string]: Attribut };
  fertigkeiten: { [id: string]: Fertigkeit };
  powerlevel: { [id: string]: Powerlevel };
  currentPowerlevel: string;
  spezies: { [id: string]: Spezies };
  currentSpezies: string;
}

export function createInitialState(): ChargenState {
  return {
    attribute: {},
    currentPowerlevel: null,
    powerlevel: {},
    currentSpezies: null,
    spezies: {},
    fertigkeiten: {}
  };
}

@StoreConfig({ name: 'chargen' })
@Injectable()
export class ChargenStore extends Store<ChargenState>  {
  constructor() {
    super(createInitialState());
  }
}
