import { Shallow } from 'shallow-render';
import { LieuVaccinationAvanceModule } from '../lieu-vaccination-avance.module';
import { DataListComponent } from './data-list.component';

describe('<app-data-list />', () => {
  let shallow: Shallow<DataListComponent>;

  beforeEach(() => {
    shallow = new Shallow(DataListComponent, LieuVaccinationAvanceModule);
  });

  it('doit afficher données injectées', async () => {
    const noms = ['Québec', 'Trois-Rivières', 'Laval'];
    const { instance } = await shallow.render({ bind: { noms } });
    expect(instance.noms).toEqual(noms);
  });

});

