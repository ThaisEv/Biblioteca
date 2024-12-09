import { Component } from '@angular/core';
import { LivroService } from '../model/livro.service';
import { Favorito } from '../model/favoritos';
import { BancoDeDadosService } from '../model/banco-de-dados.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  visible: boolean = false;
  formValidarSenha: FormGroup;


  senhasIguais: boolean = false;

  constructor(public ls: LivroService, public bdService: BancoDeDadosService, private fb: FormBuilder) {
    this.formValidarSenha = this.fb.group({
      senha: [this.bdService.usuario.senha, [Validators.required]],
      confirmarSenha: ['', [Validators.required]]
    });
    this.formValidarSenha.valueChanges.subscribe(() => {
      this.verificarSenhas();
    });
  }

  verificarSenhas() {
    const senha = this.formValidarSenha.get('senha')?.value;
    const confirmarSenha = this.formValidarSenha.get('confirmarSenha')?.value;
    this.senhasIguais = senha === confirmarSenha && senha !== '';
  }

  showDialog() {
    this.visible = true;
  }

  adicionarFavortito(fav: string, id: number) {
    const favorito = { id_fav: fav, id_usuario: id };
    this.bdService.adicionarFavortito(favorito).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Livro adicionado aos favoritos!');
      }
    });
  }
}
