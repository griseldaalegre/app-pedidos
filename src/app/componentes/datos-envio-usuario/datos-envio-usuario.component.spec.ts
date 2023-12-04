import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEnvioUsuarioComponent } from './datos-envio-usuario.component';

describe('DatosEnvioUsuarioComponent', () => {
  let component: DatosEnvioUsuarioComponent;
  let fixture: ComponentFixture<DatosEnvioUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosEnvioUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEnvioUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
