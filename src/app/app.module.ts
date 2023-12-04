import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { ListaProductosPedidosComponent } from './componentes/lista-productos-pedidos/lista-productos-pedidos.component';
import { BotonesComponent } from './componentes/botones/botones.component';
import { BannerConfirmaPedidoComponent } from './componentes/banner-confirma-pedido/banner-confirma-pedido.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DialogContentExampleDialogComponent } from './componentes/dialog-content-example-dialog/dialog-content-example-dialog.component';
import { DatosEnvioUsuario } from './componentes/datos-envio-usuario/datos-envio-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    ListaProductosPedidosComponent,
    BotonesComponent,
    BannerConfirmaPedidoComponent,
    DialogContentExampleDialogComponent,
    DatosEnvioUsuario
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
