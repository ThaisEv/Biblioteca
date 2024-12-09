import { Component, OnInit } from '@angular/core';
import { LivroService } from '../model/livro.service';
import { BancoDeDadosService } from '../model/banco-de-dados.service';
import { Livro } from '../model/livro';
import { Favorito } from '../model/favoritos';

@Component({
  selector: 'app-mostrar-favoritos',
  templateUrl: './mostrar-favoritos.component.html',
  styleUrl: './mostrar-favoritos.component.css'
})
export class MostrarFavoritosComponent implements OnInit {
  favoritosInfo: Livro[] = [];
  favoritos: Favorito[] = [];
  constructor(public ls: LivroService, public bdService: BancoDeDadosService) {

  }

  ngOnInit(): void {
    this.bdService.livrosFavoritos().subscribe(
      (res) => {
        this.favoritos = res;
        console.log(this.favoritos);

        this.favoritos.forEach(item => {
          if (item.id_usuario == this.bdService.usuario.id) {
            this.selecionarFavorito(item.id_fav);
            console.log("ID Favorito:", item.id_fav);
          }
        });
      }

    )
  }

  selecionar(id: string) {
    this.ls.selecionarLivro(id);
  }

  selecionarFavorito(id: string) {
    this.ls.getAPIdeLivro(id).subscribe(
      (res) => {
        this.favoritosInfo = this.favoritosInfo.concat(res);
      }

    );
  }
}
