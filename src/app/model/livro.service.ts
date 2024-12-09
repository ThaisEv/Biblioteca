import { Injectable } from '@angular/core';
import { Livro } from './livro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private API = 'https://www.googleapis.com/books/v1/volumes';
  livros: Livro[] = [];
  livro: Livro = new Livro();
  compra = {id: '', title: '', thumbnail: '', amount: 0}

  constructor(private http: HttpClient) { }

  getAPIdeBusca(p: string): Observable<any> {
      return this.http.get(`${this.API}?q=${p}`);
  }

  getAPIdeLivro(id: string): Observable<Livro> {
    return this.http.get<Livro>(`${this.API}/${id}`);
  }

  

  buscarLivrosPorNome(nome: string) {
    this.getAPIdeBusca(nome).subscribe(
      res => {
        this.livros = res.items;
        console.log(this.livros);
      }
    );
  }

  selecionarLivro(id: string) {
    this.getAPIdeLivro(id).subscribe(
      res => {
        this.livro = res;
        console.log(this.livro);
      }
    );
  }

  comprar(id: string, title: string, thumbnail: string, amount: number) {
    const compra = {id: id, title: title, thumbnail: thumbnail, amount: amount};
    this.compra = compra;
    console.log(compra);
  }
    
}
