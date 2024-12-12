import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroService } from '../model/livro.service';

@Component({
  selector: 'app-comprar-livros',
  templateUrl: './comprar-livros.component.html',
  styleUrl: './comprar-livros.component.css'
})
export class ComprarLivrosComponent {
  forma = [{nome: "Pix", icon: "pi pi-dollar"}, {nome: "Boleto bancário", icon: "pi pi-file"}]
  parcela = [{nome: "Parcela única", value: 1}, {nome: "x2 parcelas", value: 2}, 
             {nome: "x3 parcelas", value: 3}, {nome: "x4 parcelas", value: 4},
             {nome: "x5 parcelas", value: 5}];

  infoCompra = {forma: '', parcelas: 0, valorParcelas: [{np: 0, vp: 0}], valorTotal: 0};        
  formCompra: FormGroup;
  

    

  constructor(public ls: LivroService, private fb: FormBuilder) {
    this.formCompra = this.fb.group({
      forma_pag: ['', [Validators.required]],
      parcela_pag: [0, [Validators.required]]
    })
  }

  

  comprar(valor: number) {
    const forma = this.formCompra.value.forma_pag;
    const parcela = this.formCompra.value.parcela_pag;
    var val = [];
    var valorTotal = 0;

    for (let x = 1; x <= parcela.value; x++) {
      const taxaJuros = (x - 1) * 0.05;
      const v = (valor * (1 + taxaJuros) / parcela.value).toFixed(2);
      val.push({np: x, vp : Number((v))});
      valorTotal = +((valorTotal + +v).toFixed(2));
    }
    console.log(val);
    
    this.infoCompra = {forma: forma.nome, parcelas: parcela.value, valorParcelas: val, valorTotal: valorTotal};
    console.log(this.infoCompra)
  }

}
