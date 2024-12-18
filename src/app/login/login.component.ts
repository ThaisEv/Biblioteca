import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BancoDeDadosService } from '../model/banco-de-dados.service';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';
import { Login } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form_login: FormGroup;
  constructor(private bdService: BancoDeDadosService, private fb: FormBuilder, public router: Router) {
    this.form_login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(6)]]
    })


  }

  ngOnInit() {

  }

  autenticar() {
    this.bdService.pegarUsuarios().subscribe(
      (res) => {
        const usuarios = res;
        console.log(usuarios);

        const usuario = usuarios.find(
          (item) => item.email === this.form_login.value.email && item.senha === this.form_login.value.senha
        );

        if (usuario) {
          const l = new Login(usuario.id, usuario.nome, usuario.email, usuario.senha)
          this.bdService.adicionarLogin(l).subscribe({
            next: (response) => {
              console.log(response);
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => {
              console.log('Usuário logado!');
              window.location.href = '/';
            }
          })

        }
      }
    );




    if (this.bdService.usuario_logado.id_usuario != 0) {
      console.log(this.bdService.usuario_logado)
      return true
    }

    console.log(this.bdService.usuario_logado)
    return false
  }


}
