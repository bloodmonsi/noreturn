import { Attribut, ChargenStore, Powerlevel, Spezies } from './store';
import { Injectable } from '@angular/core';

@Injectable()
export class ChargenService {
  constructor(private chargenStore: ChargenStore) {}

  init(attribute: Attribut[], powerlevel: Powerlevel[], spezies: Spezies[]) {
    const attributeDic = this.toDiciotnary(attribute);
    const powerLevelDic = this.toDiciotnary(powerlevel);
    const speziesDic = this.toDiciotnary(spezies);
    const currentPowerlevel = powerlevel[0].id;
    const currentSpezies = spezies[2].id;

    this.chargenStore.update(state => {
      const currentSpeziesEntity = speziesDic[currentSpezies];

      return {
        ...state,
        attribute: {
          // TODO: Alle anderen Attribute
          ge: {
            ...attributeDic.ge,
            wert: currentSpeziesEntity.geStart
          },
        },
        powerlevel: powerLevelDic,
        spezies: speziesDic,
        currentPowerlevel: currentPowerlevel,
        currentSpezies: currentSpezies
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

  private toDiciotnary<T>(liste: T[]) {
    return liste.reduce((dic, item: any) => {
      dic[item.id] = item;
      return dic;
    }, <{ [id: string]: T }>{});
  }
}
