import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lista-productos-pedidos',
  templateUrl: './lista-productos-pedidos.component.html',
  styleUrls: ['./lista-productos-pedidos.component.css']
})

export class ListaProductosPedidosComponent implements OnInit, OnChanges {
  @Input() datos: any;
  @Output() eliminarProd = new EventEmitter();

  total: number = 0;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {}

  restarProducto(posicion: any){
    if(this.datos.listaProd[posicion].cantidad  > 0){
    this.datos.listaProd[posicion].cantidad -= 1;
    this.datos.importeTotal -= this.datos.listaProd[posicion].precio;
    }
  }

  sumarProducto(posicion: any){
    this.datos.listaProd[posicion].cantidad += 1;
    this.datos.importeTotal += this.datos.listaProd[posicion].precio;
  }

  deleteProd(posicion: any) {
    this.datos.importeTotal -= this.datos.listaProd[posicion].precio * this.datos.listaProd[posicion].cantidad;
    this.datos.listaProd.splice(posicion,1);
  }
}
