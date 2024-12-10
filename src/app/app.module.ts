import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//primeNG
import { PrimeNgModule } from './primeng.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarLivroComponent } from './buscar-livro/buscar-livro.component';
import { MostrarLivroComponent } from './mostrar-livro/mostrar-livro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LivroComponent } from './livro/livro.component';
import { MostrarFavoritosComponent } from './mostrar-favoritos/mostrar-favoritos.component';
import { ComprarLivrosComponent } from './comprar-livros/comprar-livros.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarLivroComponent,
    MostrarLivroComponent,
    CadastroComponent,
    LivroComponent,
    MostrarFavoritosComponent,
    ComprarLivrosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    PrimeNgModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
