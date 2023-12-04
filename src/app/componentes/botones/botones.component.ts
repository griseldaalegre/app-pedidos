import { Component, OnInit, EventEmitter, Output, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatosEnvioUsuario } from '../datos-envio-usuario/datos-envio-usuario.component';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})

export class BotonesComponent implements OnInit {
  @Output() eliminarOutput = new EventEmitter();
  @Output() comprarOutput = new EventEmitter();

  anda: boolean = true;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  eliminarProducto(anda: any) {
    this.eliminarOutput.emit(anda);
  }

  comprarProducto() {
    const dialogRef = this.dialog.open(DatosEnvioUsuario);
   // alert("Este es el ppadre del form")
    dialogRef.afterClosed().subscribe(result => {
      this.envioCreado(event);
      if(result){
        console.log(JSON.stringify(result))
        console.log("Se hizo una accion");
        this.comprarOutput.emit(true)
      }else{
        console.log("TOCO AFUERA Y SE CERRO")
      }
      console.log(`Dialog result: ${result}`);
    });
  }

  envioCreado($event: any) {
   // alert("anda")
  }

}
/*
@Component({
//  selector: 'dialog-content-example-dialog',
//  templateUrl: 'dialog-content-example-dialog.html',
 // styleUrls: ['dialog-content.css']
})

export class DialogContentExampleDialog {
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


}
*/







