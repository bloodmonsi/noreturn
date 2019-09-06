import {Abnormitaeten, Attribut, ChargenStore, Fertigkeit, Powerlevel, Spezies} from './store';
import { Injectable } from '@angular/core';

@Injectable()
export class ChargenService {
  constructor(private chargenStore: ChargenStore) {}

  init(attribute: Attribut[], powerlevel: Powerlevel[], spezies: Spezies[], fertigkeiten: Fertigkeit[], abnormitaeten: Abnormitaeten[]) {
    const attributeDic = this.toDiciotnary(attribute);
    const powerLevelDic = this.toDiciotnary(powerlevel);
    const abnormitaetenDic = this.toDiciotnary(abnormitaeten);
    const speziesDic = this.toDiciotnary(spezies);
    // const fertigkeitenDic = this.toDiciotnary(fertigkeiten);
    const currentPowerlevel = powerlevel[1].id;
    const currentSpezies = spezies[0].id;

    this.chargenStore.update(state => {
      const currentSpeziesEntity = speziesDic[currentSpezies];

      return {
        ...state,
        attribute: {
          // TODO: evtl. Schleife einbauen
          ge: {
            ...attributeDic.ge,
            wert: currentSpeziesEntity.geStart
          },
          st: {
            ...attributeDic.st,
            wert: currentSpeziesEntity.stStart
          },
          ko: {
            ...attributeDic.ko,
            wert: currentSpeziesEntity.koStart
          },
          sk: {
            ...attributeDic.sk,
            wert: currentSpeziesEntity.skStart
          },
          wi: {
            ...attributeDic.wi,
            wert: currentSpeziesEntity.wiStart
          },
          wa: {
            ...attributeDic.wa,
            wert: currentSpeziesEntity.waStart
          },
          ch: {
            ...attributeDic.ch,
            wert: currentSpeziesEntity.chStart
          },
          lo: {
            ...attributeDic.lo,
            wert: currentSpeziesEntity.loStart
          },
          fa: {
            ...attributeDic.fa,
            wert: currentSpeziesEntity.faStart
          },
          to: {
            ...attributeDic.to,
            wert: currentSpeziesEntity.toStart
          },
        },
        powerlevel: powerLevelDic,
        // fertigkeiten: fertigkeitenDic,
        fertigkeiten: this.toDiciotnary(fertigkeiten.map(fertigkeiten_ => {
          return {
            ...fertigkeiten_,
            wert: 0
          };
        })),
        spezies: speziesDic,
        abnormitaeten: abnormitaetenDic,
        currentPowerlevel: currentPowerlevel,
        currentSpezies: currentSpezies
      };
    });
  }

  selektierePowerlevel(powerlevelId: string) {
    this.chargenStore.update(state => {
      return {
        ...state,
        currentPowerlevel: powerlevelId
      };
    });
  }

  selektiereSpezies(speziesId: string) {
    this.chargenStore.update(state => {
      const attributeDic = state.attribute;
      const currentSpeziesEntity = state.spezies[speziesId];

      return {
        ...state,
        attribute: {
          // TODO: Alle anderen Attribute
          ge: {
            ...attributeDic.ge,
            wert: currentSpeziesEntity.geStart
          },
          st: {
            ...attributeDic.st,
            wert: currentSpeziesEntity.stStart
          },
          ko: {
            ...attributeDic.ko,
            wert: currentSpeziesEntity.koStart
          },
          sk: {
            ...attributeDic.sk,
            wert: currentSpeziesEntity.skStart
          },
          wi: {
            ...attributeDic.wi,
            wert: currentSpeziesEntity.wiStart
          },
          wa: {
            ...attributeDic.wa,
            wert: currentSpeziesEntity.waStart
          },
          ch: {
            ...attributeDic.ch,
            wert: currentSpeziesEntity.chStart
          },
          lo: {
            ...attributeDic.lo,
            wert: currentSpeziesEntity.loStart
          },
          fa: {
            ...attributeDic.fa,
            wert: currentSpeziesEntity.faStart
          },
          to: {
            ...attributeDic.to,
            wert: currentSpeziesEntity.toStart
          },
        },
        currentSpezies: speziesId
      };
    });
  }

  incrementAttribut(attributId: string) {
    this.chargenStore.update(state => {
      return {
        ...state,
        attribute: {
          ...state.attribute,
          [attributId]: {
            ...state.attribute[attributId],
            wert: state.attribute[attributId].wert + 1
          },
        },
      };
    });
  }

  decrementAttribut(attributId: string) {
    this.chargenStore.update(state => {
      return {
        ...state,
        attribute: {
          ...state.attribute,
          [attributId]: {
            ...state.attribute[attributId],
            wert: state.attribute[attributId].wert - 1
          },
        },
      };
    });
  }

  incrementFertigkeit(fertigkeitId: string) {
    this.chargenStore.update(state => {
      return {
        ...state,
        fertigkeiten: {
          ...state.fertigkeiten,
          [fertigkeitId]: {
            ...state.fertigkeiten[fertigkeitId],
            wert: state.fertigkeiten[fertigkeitId].wert + 1
          },
        },
      };
    });
  }

  decrementFertigkeit(fertigkeitId: string) {
    this.chargenStore.update(state => {
      return {
        ...state,
        fertigkeiten: {
          ...state.fertigkeiten,
          [fertigkeitId]: {
            ...state.fertigkeiten[fertigkeitId],
            wert: state.fertigkeiten[fertigkeitId].wert - 1
          },
        },
      };
    });
  }

  private toDiciotnary<T>(liste: T[]) {
    return liste.reduce((dic, item: any) => {
      dic[item.id] = item;
      return dic;
    }, <{ [id: string]: T }>{});
  }
}
