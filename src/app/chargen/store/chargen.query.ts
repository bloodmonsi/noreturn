import { Injectable } from '@angular/core';
import { ChargenState, ChargenStore } from './chargen.store';
import { Query } from '@datorama/akita';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class ChargenQuery extends Query<ChargenState> {
  constructor(chargenStore: ChargenStore) {
    super(chargenStore);
  }

  getMaximaleGp() {
    return this.select(state => {
      const activePowerlevel = state.powerlevel[state.currentPowerlevel];
      return activePowerlevel ? activePowerlevel.gp : 0;
    });
  }

  getSpeziesKosten() {
    return this.select(state => {
      const activeSpezies = state.spezies[state.currentSpezies];
      return activeSpezies ? activeSpezies.kosten : 0;
    });
  }

  getVerbleibendeGp() {
    const speziesGp = this.getSpeziesKosten();
    const maximumGp = this.getMaximaleGp();
    const combined = combineLatest(maximumGp, speziesGp);
    return combined.pipe(map(([valueStream1, valueStream2]) => {
      console.log({
        valueStream1,
        valueStream2
      });

      // return valueStream1 - valueStream2;
      // ToDO
      return (valueStream1 || 0) - (valueStream2 || 0);
    }));
  }

  getCurrentPowerlevel() {
    return this.select(state => {
      return state.currentPowerlevel;
    });
  }

  getPowerlevelList() {
    return this.select(state => {
      const powerlevel = Object.values(state.powerlevel);
      return powerlevel.map(powerlevel_ => {
        return {
          ...powerlevel_,
          currentPowerlevel: state.currentPowerlevel
        };
      });
    });
  }

  getFertigkeitenList() {
    return this.select(state => {
      const fertigkeiten = Object.values(state.fertigkeiten);
      return fertigkeiten.map(fertigkeit => {
        const wert = 0;

        return {
          ...fertigkeit,
          wert,
          gesamtKosten: wert ? wert * 3 : 0
        };
      });
    });
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
