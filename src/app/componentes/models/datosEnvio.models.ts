export class DatosEnvio {
    nombreUsuario: string;
    direccionUsuario: String;
    medioDePagoUsuario: string;
    numeroTarjetaUsuario?: string;

    constructor(nombre: string = '', direccionDeEnvio: string = '', medioDePago: string = '') {
        this.nombreUsuario = nombre;
        this.direccionUsuario = direccionDeEnvio;
        this.medioDePagoUsuario = medioDePago;
        this.numeroTarjetaUsuario = '';
    }
}