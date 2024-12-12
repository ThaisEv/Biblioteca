import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from './usuario';
import { Favorito } from './favoritos';

@Injectable({
  providedIn: 'root'
})
export class BancoDeDadosService {
  usuario = { id: 0, senha: '' };
  favoritos: Favorito[] = [];

  private API = 'http://localhost:3000';

  constructor(private http: HttpClient) { 
   }
  
  pegarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.API}/dados-usuario`);
  }

  livrosFavoritos(): Observable<Favorito[]> {
    return this.http.get<Favorito[]>(`${this.API}/dados-favoritos`);
  }

  adicionarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API }/add-usuario`, usuario)
  }

  adicionarFavortito(fav: Favorito): Observable<Favorito> {
    return this.http.post<Favorito>(`${this.API}/add-favoritos`, fav)
  }

  deletarFavorito(id: string) {
    return this.http.delete(`${this.API}/deletar-favorito/${id}`)
  }
}