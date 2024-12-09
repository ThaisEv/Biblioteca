import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarLivroComponent } from './buscar-livro/buscar-livro.component';
import { MostrarLivroComponent } from './mostrar-livro/mostrar-livro.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LivroComponent } from './livro/livro.component';
import { MostrarFavoritosComponent } from './mostrar-favoritos/mostrar-favoritos.component';
import { ComprarLivrosComponent } from './comprar-livros/comprar-livros.component';


const routes: Routes = [
  {path: 'buscar', component: BuscarLivroComponent}, 
  {path: 'mostrar', component: MostrarLivroComponent},
  {path: 'livro', component: LivroComponent},
  {path: 'favoritos', component: MostrarFavoritosComponent},
  {path: 'comprar', component: ComprarLivrosComponent},
  {path: '', component: CadastroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
