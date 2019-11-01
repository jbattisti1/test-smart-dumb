import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampTexteComponent } from './rechercheVilleAvancee/champ-texte/champ-texte.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampTexteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
