import { Store, StoreConfig } from '@datorama/akita';
import { Fertigkeit, erstelleFertigkeit } from './fertigkeiten.model';

const initialState: Fertigkeit = erstelleFertigkeit({name: 'Bob', attribut: 'GE', input: 'true', wert: 1});

@StoreConfig({name: 'fertigkeit'})
export class FertigkeitStore extends Store<Fertigkeit> {
  constructor() {
    super(initialState);
  }
}
