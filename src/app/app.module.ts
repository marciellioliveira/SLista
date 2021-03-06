import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ListasProntasComponent } from './paginas/listas-prontas/listas-prontas.component';
import { CriarListasComponent } from './paginas/criar-listas/criar-listas.component';
import { AppRoutingModule } from './/app-routing.module';
import { GraficoComponent } from './paginas/grafico/grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    InicioComponent,
    ListasProntasComponent,
    CriarListasComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
