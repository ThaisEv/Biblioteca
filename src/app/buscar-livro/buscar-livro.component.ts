import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroService } from '../model/livro.service';

@Component({
  selector: 'app-buscar-livro',
  templateUrl: './buscar-livro.component.html',
  styleUrl: './buscar-livro.component.css'
})
export class BuscarLivroComponent {
  formBusca: FormGroup;

  constructor(private ls: LivroService, private fb: FormBuilder) {
    this.formBusca = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  buscar() {
    const nome = this.formBusca.value.nome;
    this.ls.buscarLivrosPorNome(nome.trim());
  }
}
