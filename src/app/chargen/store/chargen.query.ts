import { Injectable } from '@angular/core';
import { ChargenState, ChargenStore } from './chargen.store';
import { Query } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ChargenQuery extends Query<ChargenState> {
  constructor(chargenStore: ChargenStore) {
    super(chargenStore);
  }

  getWerteFuerPdf() {
    return combineLatest(this.getPrimaerAttributWerteFuerPdf(), this.getSekundaerAttributWerteFuerPdf(),
      this.getSpeziesWerteFuerPdf()).pipe(map((
      [primaerAttribute, sekundaerAttribute, spezies]
    ) => {
      return [...primaerAttribute, ...sekundaerAttribute, ...spezies];
    }));
  }

  getSpeziesWerteFuerPdf() {
    return this.selectCurrentSpezies().pipe(map(spezies => {
      const name = 'txtSpezies';
      const wert = spezies;
      return {
        name,
        wert
      };
    }));
  }

  getPrimaerAttributWerteFuerPdf() {
    return this.select(state => {
      const attribute = Object.values(state.attribute).filter(attribute_ => attribute_.primaer);

      return attribute.map(attribut => {
        const wert = attribut.wert;
        const name = 'txt' + attribut.name + 'Stufe';
        return {
          name,
          wert
        };
      });
    });
  }

  getSekundaerAttributWerteFuerPdf() {
    return this.select(state => {
      const attribute = Object.values(state.attribute).filter(attribute_ => !attribute_.primaer);

      return attribute.map(attribut => {
        const wert = attribut.wert;
        const name = 'txt' + attribut.name + 'Stufe';
        return {
          name,
          wert
        };
      });
    });
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
    const abnormitaetenGp = this.getAbnormitaetenKosten();
    const combined = combineLatest(maximumGp, speziesGp, attributeGp, fertigkeitenGp, abnormitaetenGp);
    return combined.pipe(map(([valueStream1, valueStream2, valueStream3, valueStream4, valueStream5]) => {
      // console.log({
      //   valueStream1,
      //   valueStream2,
      //   valueStream3,
      //   valueStream4,
      //   valueStream5
      // });

      // return valueStream1 - valueStream2;
      // ToDO
      return (valueStream1 || 0) - (valueStream2 || 0) - (valueStream3 || 0) - (valueStream4 || 0) - (valueStream5 || 0);
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
      return Object.values(state.abnormitaeten);
      // return abnormitaeten.map(abnormitaet => {
      //
      //   return {
      //     ...abnormitaet,
      //     name: abnormitaet.name
      //   };
      // });
    });
  }

  getCurrentSpezies() {
    return this.getSnapshot().currentSpezies;
  }

  selectCurrentSpezies() {
    return this.select(state => state.currentSpezies);
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

  getAbnormitaetenKosten() {
    return combineLatest(this.getAbnormitaetenList()).pipe(map((
      [abnormitaeten]
    ) => {
      // return abnormitaeten.reduce((current, item) => current + item.kosten, 0);
      return 0;
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
