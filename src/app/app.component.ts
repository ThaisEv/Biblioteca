import { Component, OnInit  } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) {}

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
