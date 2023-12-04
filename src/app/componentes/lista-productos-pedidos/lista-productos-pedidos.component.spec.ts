import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosPedidosComponent } from './lista-productos-pedidos.component';

describe('ListaProductosPedidosComponent', () => {
  let component: ListaProductosPedidosComponent;
  let fixture: ComponentFixture<ListaProductosPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProductosPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProductosPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
