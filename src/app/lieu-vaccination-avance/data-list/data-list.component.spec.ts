import { Shallow } from 'shallow-render';
import { LieuVaccinationAvanceModule } from '../lieu-vaccination-avance.module';
import { DataListComponent } from './data-list.component';

describe('<app-champ-texte />', () => {
  let shallow: Shallow<DataListComponent>;

  beforeEach(() => {
    shallow = new Shallow(DataListComponent, LieuVaccinationAvanceModule);
  });


});

