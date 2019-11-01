import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampTexteComponent } from './champ-texte.component';

describe('ChampTexteComponent', () => {
  let component: ChampTexteComponent;
  let fixture: ComponentFixture<ChampTexteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampTexteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampTexteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
