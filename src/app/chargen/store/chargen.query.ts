import { Injectable } from '@angular/core';
import { ChargenState, ChargenStore } from './chargen.store';
import { Query } from '@datorama/akita';

@Injectable()
export class ChargenQuery extends Query<ChargenState> {
  constructor(chargenStore: ChargenStore) {
    super(chargenStore);
  }

  getCurrentSpezies() {
    return this.select(state => {
      return state.currentSpezies;
    });
  }

  getSpeziesList() {
    return this.select(state => {
      const spezies = Object.values(state.spezies);
      return spezies.map(spezies_ => {
        return {
          ...spezies_,
          currentSpezies: state.currentSpezies
        };
      });
    });
  }

  getAttributKosten() {
    return this.select(state => {
      const attribute = Object.values(state.attribute);
       return attribute.reduce((current, item) => current + (item.kosten * item.wert), 0);
    });
  }

  selectStartwertePrimaryAttribut() {
    return this.select(state => {
      const attribute = Object.values(state.attribute).filter(attribute_ => attribute_.primaer);
      const activeSpezies = state.spezies[state.currentSpezies];

      return attribute.map(attribut => {
        // const id = attribut.id as string;
        const keyPrefix = attribut.id;
        const maxKey = keyPrefix + 'Max';
        const startKey = keyPrefix + 'Start';
        const wert = attribut.wert;
        const maxWert = activeSpezies[maxKey];
        const startwert = activeSpezies[startKey];

        return {
          ...attribut,
          wert,
          maxWert,
          gesamtKosten: wert !== startwert ? (wert - 1) * attribut.kosten : 0
        };
      });
    });
  }

  selectStartwerteSecondaryAttribut() {
    return this.select(state => {
      const attribute = Object.values(state.attribute).filter(attribute_ => !attribute_.primaer);
      const activeSpezies = state.spezies[state.currentSpezies];

      return attribute.map(attribut => {
        // const id = attribut.id as string;
        const keyPrefix = attribut.id;
        const maxKey = keyPrefix + 'Max';
        const startKey = keyPrefix + 'Start';
        const wert = attribut.wert;
        const maxWert = activeSpezies[maxKey];
        const startwert = activeSpezies[startKey];

        return {
          ...attribut,
          wert,
          maxWert,
          gesamtKosten: wert !== startwert ? (wert - 1) * attribut.kosten : 0
        };
      });
    });
  }
}
