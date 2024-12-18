import { Component } from '@angular/core';
import { BancoDeDadosService } from '../model/banco-de-dados.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})
export class PaginaInicialComponent {

  constructor(public bdService: BancoDeDadosService) { }

 

}
