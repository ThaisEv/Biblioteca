import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LivroService } from '../model/livro.service';
import { Favorito } from '../model/favoritos';
import { BancoDeDadosService } from '../model/banco-de-dados.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { Resenha } from '../model/resenha';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent implements OnInit, OnChanges  {
  visible: boolean = false;
  formValidarSenha: FormGroup;
  formResenha: FormGroup;

  favoritosIds: string[] = [];
  resenhasIds: string[] = [];
  resenhas: Resenha[] = [];

  senhasIguais: boolean = false;

  ngOnInit() {
    if (this.ls.livro && this.ls.livro.id) {
      this.buscarResenhas();
    }
  }

  ngOnChanges() {
    if (this.ls.livro && this.ls.livro.id) {
      this.buscarResenhas();
    }
  }

  constructor(public ls: LivroService, public bdService: BancoDeDadosService, private fb: FormBuilder) {

    this.formValidarSenha = this.fb.group({
      senha: [this.bdService.usuario_logado.senha_login, [Validators.required]],
      confirmarSenha: ['', [Validators.required]]
    });
    this.formValidarSenha.valueChanges.subscribe(() => {
      this.verificarSenhas();
    });

    this.formResenha = this.fb.group({
      estrelas: [0, [Validators.required]],
      resenha: ['', [Validators.required]]
    });



    this.bdService.livrosFavoritos().subscribe((res) => {
      this.favoritosIds = res
        .filter((item) => item.id_usuario === this.bdService.usuario_logado.id_usuario)
        .map((item) => item.id_fav);
    });

    this.bdService.pegarResenhas().subscribe((res) => {
      this.favoritosIds = res
        .filter((item) => item.id_usuario === this.bdService.usuario_logado.id_usuario)
        .map((item) => item.id_livro);
    });
  }

  

  buscarResenhas() {
    this.bdService.pegarResenhas().subscribe((res) => {
      this.resenhas = res.filter(resenha => resenha.id_livro === this.ls.livro.id);
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
        this.favoritosIds.push(fav);

      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Livro adicionado aos favoritos!');
      }
    });
  }

  adicionarResenha(usuario: number, livro: string, nome: string) {
    const resen = new Resenha(this.formResenha.value.resenha, this.formResenha.value.estrelas, usuario, livro, nome)
    this.bdService.adicionarResenha(resen).subscribe({
      next: (response) => {
        console.log(response);
        this.resenhasIds.push(livro);
        this.buscarResenhas();
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Livro adicionado aos favoritos!');
      }
    });
  }

  deletar(idLivro: string) {
    this.bdService.deletarFavorito(idLivro).subscribe(res => {
      if (res) {
        console.log('Favorito excluído com sucesso');
        this.favoritosIds = this.favoritosIds.filter((id) => id !== idLivro);
      } else {
        console.log('Erro ao excluir usuário');
      }
    })
  }

  deletarResenha(idLivro: string) {
    this.bdService.deletarResenha(idLivro).subscribe(res => {
      if (res) {
        console.log('Resenha excluída com sucesso');
        this.resenhasIds = this.resenhasIds.filter((id) => id !== idLivro);
        this.buscarResenhas();
      } else {
        console.log('Erro ao excluir usuário');
      }
    })
  }

  verificarFavorito(id: string): Observable<boolean> {
    const res = this.favoritosIds.includes(id);
    console.log(res);
    return of(res);
  }

  
}
