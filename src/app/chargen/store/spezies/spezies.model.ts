import { ID } from '@datorama/akita';

//
// export const speczies: Spezies = {
//   id: 'bla',
//   name: 'lorem',
//   attribute: {
//     'ch': { start: 43, max: 100 },
//     'bla': { start: 43, max: 100 }
//   }
// }


export interface Spezies {
  id: string;
  name: string;
  kosten: number;
  attribute: { [key: string]: { start: number; max: number; } };
  geStart: number;
  geMax: number;
  stStart: number;
  stMax: number;
  koStart: number;
  koMax: number;
  skStart: number;
  skMax: number;
  wiStart: number;
  wiMax: number;
  waStart: number;
  waMax: number;
  chStart: number;
  chMax: number;
  loStart: number;
  loMax: number;
  faStart: number;
  faMax: number;
  toStart: number;
  toMax: number;
  organismus: number;
  psyche: number;
  adrenalin: number;
  mutationspunkte: number;
  infektionW6: number;
  infektionPunkt: number;
  note: string;
  psi: boolean;
  psiBonus: number;
  psiStart: number;
}

// export function erstelleSpezies({ id = null, name = '', kosten = 0, geStart = 0, geMax = 0, stStart = 0,
// stMax = 0, koStart = 0, koMax = 0, skStart = 0, skMax = 0, wiStart = 0, wiMax = 0, waStart = 0, waMax = 0,
//                                 chStart = 0, chMax = 0, loStart = 0, loMax = 0, faStart = 0, faMax = 0,
//                                 toMax = 0, toStart = 0, organismus = 0, psyche = 0, adrenalin = 0,
//                                 mutationspunkte = 0, infektionW6 = 0, infektionPunkt = 0, note = '',
//                                 psi = false, psiBonus = 0, psiStart = 0}: Partial<Spezies>) {
//   return {
//     id, name, kosten, geStart, geMax, stStart, stMax, koStart, koMax, skStart, skMax, wiStart, wiMax,
//     waStart, waMax, chStart, chMax, loStart, loMax, faStart, faMax, toStart, toMax, organismus, psyche,
//     adrenalin, mutationspunkte, infektionPunkt, infektionW6, note, psi, psiStart, psiBonus
//   };
// }
