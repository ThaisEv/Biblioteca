import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarLivrosComponent } from './comprar-livros.component';

describe('ComprarLivrosComponent', () => {
  let component: ComprarLivrosComponent;
  let fixture: ComponentFixture<ComprarLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComprarLivrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
