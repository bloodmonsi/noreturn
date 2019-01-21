import { Powerlevel } from '../powerlevel/powerlevel.model';
import { Spezies } from '../spezies/spezies.model';
import { Fertigkeit } from '../fertigkeiten/fertigkeiten.model';
import { Attribut } from '../attribute/attribute.model';

export interface Konfiguration {
  powerlevel: Powerlevel[];
  defaultPowerlevel: number;
  defaultSpezies: number;
  spezies: Spezies[];
  fertigkeiten: Fertigkeit[];
  attribute: Attribut;
}
