import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Productos } from '../models/producto.models'

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  tituloH1 = 'Hace tu pedido';
  tituloH2 = 'Comida';

  @Output() prodOutput = new EventEmitter();

  productos: Productos[] = [
    { nombreProducto: 'Empanadas', descripcion: 'pizza', precio: 145, foto: "pizza.JPG" },
    { nombreProducto: 'Pizzas', descripcion: 'pan', precio: 200 , foto: "pasta.JPG"},
    { nombreProducto: 'Picada', descripcion: 'pasta', precio: 100 , foto: "pizza.JPG"},
    { nombreProducto: 'Tartas', descripcion: 'pasta', precio: 100 , foto: "pasta.JPG"},
    { nombreProducto: 'Arroz', descripcion: 'pasta', precio: 100, foto: "pizza.JPG" },
    { nombreProducto: 'Cazuela', descripcion: 'pasta', precio: 100 , foto: "pizza.JPG"},
    { nombreProducto: 'Pure', descripcion: 'pasta', precio: 100 , foto: "pizza.JPG"},
  ];


  constructor() { }

  ngOnInit(): void {
  }

  agregarProducto(index: any) {
    let prodNuevo = new Productos() ;
    prodNuevo.descripcion = this.productos[index].descripcion;
    prodNuevo.precio = this.productos[index].precio;
    prodNuevo.nombreProducto = this.productos[index].nombreProducto;
    this.prodOutput.emit(prodNuevo);
  }

}
