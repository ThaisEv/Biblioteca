import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarLivroComponent } from './buscar-livro/buscar-livro.component';
import { MostrarLivroComponent } from './mostrar-livro/mostrar-livro.component';


const routes: Routes = [
  {path: 'mostrar', component: BuscarLivroComponent}, 
  {path: 'buscar', component: MostrarLivroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
