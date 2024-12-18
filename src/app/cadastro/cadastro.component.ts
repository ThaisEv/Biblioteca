import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BancoDeDadosService } from '../model/banco-de-dados.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  form_cadastro: FormGroup;

  constructor(private bdService: BancoDeDadosService, private fb: FormBuilder, public router: Router) {
    this.form_cadastro = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(6)]],
      termos: [false, [Validators.requiredTrue]]
    })
  }

  adicionarUsuario() {
    const usuario = this.form_cadastro.value;
    this.bdService.adicionarUsuario(usuario).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Usuário cadastrado.');
        window.location.href = '/login';
      }
    });
  }

}
