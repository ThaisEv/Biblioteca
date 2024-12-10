import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api/menuitem';
import { BancoDeDadosService } from './model/banco-de-dados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig, public router: Router, public bdService: BancoDeDadosService) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.primengConfig.zIndex = {
          modal: 1100,    // dialog, sidebar
          overlay: 1000,  // dropdown, overlaypanel
          menu: 1000,     // overlay menus
          tooltip: 1100   // tooltip
      };
    }

  title = 'Biblioteca';

  navbar: MenuItem[] = [
    {
        label: 'Início',
        icon: 'pi pi-home',
        routerLink: '/'
    },
    {
        label: 'Favoritos',
        icon: 'pi pi-star',
        routerLink: '/favoritos'
    }
];
}
