import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerConfirmaPedidoComponent } from './banner-confirma-pedido.component';

describe('BannerConfirmaPedidoComponent', () => {
  let component: BannerConfirmaPedidoComponent;
  let fixture: ComponentFixture<BannerConfirmaPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerConfirmaPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerConfirmaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
