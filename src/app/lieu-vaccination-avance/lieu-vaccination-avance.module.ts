import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampTexteComponent } from './champ-texte/champ-texte.component';
import { DataListComponent } from './data-list/data-list.component';



@NgModule({
  declarations: [ChampTexteComponent, DataListComponent],
  imports: [
    CommonModule
  ]
})
export class LieuVaccinationAvanceModule { }
