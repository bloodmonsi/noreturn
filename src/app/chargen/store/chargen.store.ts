import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Attribut } from './attribute/attribute.model';
import { Spezies } from './spezies/spezies.model';
import { Powerlevel } from './powerlevel/powerlevel.model';

export interface ChargenState {
  attribute: { [id: string]: Attribut };
  currentPowerlevel: string;
  powerlevel: { [id: string]: Powerlevel };
  currentSpezies: string;
  spezies: { [id: string]: Spezies };
}

export function createInitialState(): ChargenState {
  return {
    attribute: {},
    currentPowerlevel: null,
    powerlevel: {},
    currentSpezies: null,
    spezies: {}
  };
}

@StoreConfig({ name: 'chargen' })
@Injectable()
export class ChargenStore extends Store<ChargenState>  {
  constructor() {
    super(createInitialState());
  }
}
