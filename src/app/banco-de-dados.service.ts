import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class BancoDeDadosService {
  private API = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  adicionarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API }/add-usuario`, usuario)
  }
}