import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarFavoritosComponent } from './mostrar-favoritos.component';

describe('MostrarFavoritosComponent', () => {
  let component: MostrarFavoritosComponent;
  let fixture: ComponentFixture<MostrarFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarFavoritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
