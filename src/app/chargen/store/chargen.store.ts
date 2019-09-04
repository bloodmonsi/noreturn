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
  abnormitaeten: { [id: string]: Abnormitaeten };
}

export function createInitialState(): ChargenState {
  return {
    attribute: {},
    currentPowerlevel: null,
    powerlevel: {},
    currentSpezies: null,
    spezies: {},
    fertigkeiten: {},
    abnormitaeten: {}
  };
}

@StoreConfig({ name: 'chargen' })
@Injectable()
export class ChargenStore extends Store<ChargenState>  {
  constructor() {
    super(createInitialState());
  }
}

export interface Abnormitaeten {
  id: string;
  name: string;
  kosten: number;
  mod: boolean;
  input: boolean;
  input2: boolean;
  mehrfach: boolean;
  organismusMod: number;
  psycheMod: number;
}
