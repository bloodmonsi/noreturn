import { Powerlevel } from '../powerlevel/powerlevel.model';
import { Spezies } from '../spezies/spezies.model';
import { Fertigkeit } from '../fertigkeiten/fertigkeiten.model';
import { Attribut } from '../attribute/attribute.model';
import {Abnormitaeten} from '../chargen.store';

export interface Konfiguration {
  powerlevel: Powerlevel[];
  defaultPowerlevel: string;
  defaultSpezies: string;
  spezies: Spezies[];
  fertigkeiten: Fertigkeit[];
  attribute: Attribut[];
  biologischeAbnormitaeten: Abnormitaeten[];
}
