import { Shallow } from 'shallow-render';
import { ChampTexteComponent } from './champ-texte.component';
import { LieuVaccinationAvanceModule } from '../lieu-vaccination-avance.module';



describe('ChampTexteComponent', () => {
  let shallow: Shallow<ChampTexteComponent>;

  beforeEach(() => {
    shallow = new Shallow(ChampTexteComponent, LieuVaccinationAvanceModule);
  });



});
