export class Productos {
    nombreProducto: string;
    descripcion: string;
    precio: number;
    cantidad?: number = 0;
    total?: number = 0;
    foto?: string = '';

    constructor(prod: string = '', descripcionProd: string = '', valor: string = ' ') {
        //voy a recibir
        this.nombreProducto = prod;
        this.descripcion = descripcionProd;
        this.precio = 0;
        this.cantidad = 0;
        this.total = 0;
    }
}