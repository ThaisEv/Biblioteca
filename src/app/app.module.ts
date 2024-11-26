import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarLivroComponent } from './buscar-livro/buscar-livro.component';
import { MostrarLivroComponent } from './mostrar-livro/mostrar-livro.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarLivroComponent,
    MostrarLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
