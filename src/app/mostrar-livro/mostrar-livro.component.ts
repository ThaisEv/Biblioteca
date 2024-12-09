import { Component } from '@angular/core';
import { LivroService } from '../model/livro.service';

@Component({
  selector: 'app-mostrar-livro',
  templateUrl: './mostrar-livro.component.html',
  styleUrl: './mostrar-livro.component.css'
})
export class MostrarLivroComponent {
  constructor (public ls: LivroService) {}

  selecionar(id: string) {
    this.ls.selecionarLivro(id);
  }
}
