import {Injectable} from '@angular/core';
import {ChargenState, ChargenStore} from './chargen.store';
import {Query} from '@datorama/akita';
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
    const attributeGp = this.getAttributKosten();
    const fertigkeitenGp = this.getFertigkeitenKosten();
    const combined = combineLatest(maximumGp, speziesGp, attributeGp, fertigkeitenGp);
    return combined.pipe(map(([valueStream1, valueStream2, valueStream3, valueStream4]) => {
      console.log({
        valueStream1,
        valueStream2,
        valueStream3,
        valueStream4
      });

      // return valueStream1 - valueStream2;
      // ToDO
      return (valueStream1 || 0) - (valueStream2 || 0) - (valueStream3 || 0) - (valueStream4 || 0);
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

        return {
          ...fertigkeit,
          wert: fertigkeit.wert,
          gesamtKosten: fertigkeit.wert !== 0 ? fertigkeit.wert * 4 : 0
        };
      });
    });
  }

  getAbnormitaetenList() {
    return this.select(state => {
      const abnormitaeten = Object.values(state.abnormitaeten);
      return abnormitaeten.map(abnormitaet => {

        return {
          ...abnormitaet,
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
    return combineLatest(this.selectStartwertePrimaryAttribut(), this.selectStartwerteSecondaryAttribut()).pipe(map((
      [prim, sec]
    ) => {
      const attribute = [...prim, ...sec];

      return attribute.reduce((current, item) => current + item.gesamtKosten, 0);
    }));

  }

  getFertigkeitenKosten() {
    return combineLatest(this.getFertigkeitenList()).pipe(map((
      [fertigkeiten]
    ) => {
      return fertigkeiten.reduce((current, item) => current + item.gesamtKosten, 0);
    }));
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
          gesamtKosten: wert > startwert ? (wert - startwert) * attribut.kosten : 0
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
          gesamtKosten: wert > startwert ? (wert - startwert) * attribut.kosten : 0
        };
      });
    });
  }
}
