import { Shallow } from 'shallow-render';
import { ChampTexteComponent } from './champ-texte.component';
import { LieuVaccinationAvanceModule } from '../lieu-vaccination-avance.module';

describe('<app-champ-texte />', () => {
  let shallow: Shallow<ChampTexteComponent>;

  beforeEach(() => {
    shallow = new Shallow(ChampTexteComponent, LieuVaccinationAvanceModule);
  });

  it('doit afficher donnée injectée', async () => {
    const { find } = await shallow.render('<app-champ-texte texte="Québec"></app-champ-texte>');
    expect(find('[data-testid="champ-texte"]').nativeElement.value).toBe('Québec');
  });

  describe('sur l\'événement input', () => {

    it('doit retourner la valeur du champs', async () => {
      const { find, instance } = await shallow.render();
      find('[data-testid="champ-texte"]').nativeElement.value = 'Laval';
      find('[data-testid="champ-texte"]').triggerEventHandler('input', { target: find('[data-testid="champ-texte"]').nativeElement });
      expect(instance.texteInput.emit).toHaveBeenCalledWith('Laval');
    });

  });

});
