import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BannerConfirmaPedidoComponent } from '../banner-confirma-pedido/banner-confirma-pedido.component';
import { DatosEnvio } from '../models/datosEnvio.models'

@Component({
  selector: 'datos-envio-usuario',
  templateUrl: './datos-envio-usuario.component.html',
  styleUrls: ['./datos-envio-usuario.component.css']
})
export class DatosEnvioUsuario {
  @Output() datosEnvioCreadosOutput = new EventEmitter();
  nuevosDatosEnvio: DatosEnvio;

  constructor(public dialogRef: MatDialogRef<DatosEnvioUsuario>) {
    this.nuevosDatosEnvio = new DatosEnvio();
  }

  @Output() tarjetaDebitOutput = new EventEmitter();
  @Output() tarjetaCreditOutput = new EventEmitter();
  esTarjeta: boolean = false;
  nombre: boolean = false;
  direccion: boolean = false;
  tarjeta: boolean = false;

  ngOnInit(): void { }

  onChange($event: any) {
    if ($event.target.value == 'debito' || $event.target.value == 'credito') {
      this.esTarjeta = true;
    }
    else {
      this.esTarjeta = false;
    }
  }

  onClick() {
    this.datosEnvioCreadosOutput.emit(this.nuevosDatosEnvio);
    this.nuevosDatosEnvio = new DatosEnvio();
  }

  envioCreado($event: any) {
    console.log($event);
    this.dialogRef.close(this.nuevosDatosEnvio);
  }
  /*
    constructor(private dialog: MatDialog) { }
  
    ngOnInit(): void {
    }
  
    @Output() tarjetaDebitOutput = new EventEmitter();
    @Output() tarjetaCreditOutput = new EventEmitter();
    esTarjeta: boolean = false;
  
    onChange($event: any) {
  
      if ($event.target.value == 'debito' || $event.target.value == 'credito') {
        this.esTarjeta = true;
      }
      else {
        this.esTarjeta = false;
      }
    }
  
    confirmarCompra(){ // podria hacer un output y avisarle al padre que hice clic para asi poder dejar en blanco todos los campos
      const dialogRef = this.dialog.open(BannerConfirmaPedidoComponent);
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log(`Dialog result: ${result}`);
      });
    }*/
}
