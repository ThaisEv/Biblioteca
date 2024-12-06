import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BancoDeDadosService } from '../banco-de-dados.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  value: string = ''
  form_cadastro: FormGroup;

  constructor(private bdService: BancoDeDadosService, private fb: FormBuilder) {
    this.form_cadastro = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(6)]]
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
      }
    });
  }

}
