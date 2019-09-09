import { Powerlevel } from '../powerlevel/powerlevel.model';
import { Spezies } from '../spezies/spezies.model';
import { Fertigkeit } from '../fertigkeiten/fertigkeiten.model';
import { Attribut } from '../attribute/attribute.model';
import { Abnormitaeten } from '../biologische-abnormitaeten/biologische-abnormitaeten.model';


export interface Konfiguration {
  powerlevel: Powerlevel[];
  defaultPowerlevel: string;
  defaultSpezies: string;
  spezies: Spezies[];
  fertigkeiten: Fertigkeit[];
  attribute: Attribut[];
  biologischeAbnormitaeten: Abnormitaeten[];
}
