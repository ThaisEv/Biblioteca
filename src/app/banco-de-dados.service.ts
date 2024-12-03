import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class BancoDeDadosService {
  [x: string]: any;
  private API = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  adicionarUsuario(u: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API }/add-user`, u).pipe(
      catchError(this.handleError('adicionarUsuario', u)) 
    )
  }
}