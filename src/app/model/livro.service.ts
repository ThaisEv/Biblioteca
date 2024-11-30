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

  constructor(private http: HttpClient) { }

  getAPI(p: string): Observable<any> {
      return this.http.get(`${this.API}?q=${p}`);
  }

  buscarLivrosPorNome(nome: string) {
    this.getAPI(nome).subscribe(
      res => {
        this.livros = res.items;
      }
    );
    console.log(this.livros);
  }

}
