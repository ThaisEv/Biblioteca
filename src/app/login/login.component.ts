import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BancoDeDadosService } from '../model/banco-de-dados.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form_login: FormGroup;
  constructor(private bdService: BancoDeDadosService, private fb: FormBuilder) {
    this.form_login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(6)]]
    })

    
  }

  ngOnInit() {
    
  }

  autenticar(): boolean {
    this.bdService.pegarUsuarios().subscribe(
      (res) => {
        const usuarios = res;
        console.log(usuarios);

        usuarios.forEach(item => {
          if (item.email === this.form_login.value.email && item.senha === this.form_login.value.senha) {
            this.bdService.usuario.id = item.id;
            this.bdService.usuario.senha = item.senha;
          }
        });
        
      }
    )

    if(this.bdService.usuario.id != 0) {
      console.log(this.bdService.usuario)
      return true
      
    } 
    console.log(this.bdService.usuario) 
    return false
  }

  
}
