import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Productos } from './componentes/models/producto.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Pedidos';
  // objeto... adentro tiene, la listaProd y el total ( que es la suma de los precios)
  datos: any = {
    listaProd: [],
    importeTotal: 0
  };
 compra = false;
  constructor(private cd: ChangeDetectorRef ,private  dialog: MatDialog) {}

  ngOnInit(): void { }

  recibirProducto(nuevoProducto: any) {
    this.compra = false;
    let productoExistente = this.datos.listaProd.find((producto: { nombreProducto: any; }) => producto.nombreProducto === nuevoProducto.nombreProducto);
    // Busca si ya existe un producto con el mismo 'id' en 'listaProd'.
    if (productoExistente) {
      productoExistente.precio = nuevoProducto.precio;
      productoExistente.cantidad = productoExistente.cantidad ? productoExistente.cantidad + 1 : 1;
      this.datos.importeTotal += nuevoProducto.precio;
      this.cd.detectChanges();
    } else {
      nuevoProducto.cantidad = 1;
      nuevoProducto.total += nuevoProducto.precio;
      this.datos.importeTotal += nuevoProducto.precio;
      this.datos.listaProd.push(nuevoProducto);
      this.cd.detectChanges();
    }
  }

  cancelarPedido() {
    if (this.datos.listaProd.length != 0) {
      this.datos.listaProd = [];
      this.datos.importeTotal = 0;
      alert("Se cancelo el pedido");
    }
  }

  comprarPedido() {

    if (this.datos.listaProd.length != 0){
      this.datos.listaProd = [];
      alert("Se confirmo el pedido" + this.datos.importeTotal);
      this.compra = true;
    }
      
  }
}



