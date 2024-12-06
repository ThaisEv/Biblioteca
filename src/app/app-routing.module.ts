import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarLivroComponent } from './buscar-livro/buscar-livro.component';
import { MostrarLivroComponent } from './mostrar-livro/mostrar-livro.component';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
  {path: 'buscar', component: BuscarLivroComponent}, 
  {path: 'mostrar', component: MostrarLivroComponent},
  {path: '', component: CadastroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
