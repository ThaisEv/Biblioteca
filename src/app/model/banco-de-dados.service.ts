import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from './usuario';
import { Favorito } from './favoritos';
import { Login } from './login';
import { Resenha } from './resenha';

@Injectable({
  providedIn: 'root'
})
export class BancoDeDadosService {
  usuario_logado: Login = new Login(0, '', '', '');
  favoritos: Favorito[] = [];

  private API = 'http://localhost:3000';

  constructor(private http: HttpClient) { 
    this.pegarLogin().subscribe(
      (res) => {
          this.usuario_logado = res[0];
          console.log(this.usuario_logado)
      }
    )
  }
  
  pegarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.API}/dados-usuario`);
  }

  pegarLogin(): Observable<Login[]> {
    return this.http.get<Login[]>(`${this.API}/dados-login`);
  }

  pegarResenhas(): Observable<Resenha[]> {
    return this.http.get<Resenha[]>(`${this.API}/dados-resenhas`);
  }

  livrosFavoritos(): Observable<Favorito[]> {
    return this.http.get<Favorito[]>(`${this.API}/dados-favoritos`);
  }

  adicionarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API }/add-usuario`, usuario)
  }

  adicionarLogin(usuario: Login): Observable<Login> {
    return this.http.post<Login>(`${this.API }/add-login`, usuario)
  }

  adicionarFavortito(fav: Favorito): Observable<Favorito> {
    return this.http.post<Favorito>(`${this.API}/add-favoritos`, fav)
  }

  adicionarResenha(res: Resenha): Observable<Resenha> {
    return this.http.post<Resenha>(`${this.API}/add-resenha`, res)
  }

  deletarLogin(id: number) {
    return this.http.delete(`${this.API}/deletar-login/${id}`)
  }

  deletarFavorito(id: string) {
    return this.http.delete(`${this.API}/deletar-favorito/${id}`)
  }

  deletarResenha(id: string) {
    return this.http.delete(`${this.API}/deletar-resenha/${id}`)
  }
  
}