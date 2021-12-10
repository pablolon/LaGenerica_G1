import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProductoComponent } from './producto/producto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ReporteComponent } from './reporte/reporte.component';
import { VentaComponent } from './venta/venta.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { NuevoclienteComponent } from './cliente/nuevocliente/nuevocliente.component';
import { EditarclienteComponent } from './cliente/editarcliente/editarcliente.component';
import { ListarclienteComponent } from './listarcliente/listarcliente.component';
import { ConsolidadoComponent } from './consolidado/consolidado.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    LoginComponent,
    UsuarioComponent,
    ProveedorComponent,
    ProductoComponent,
    ClienteComponent,
    ReporteComponent,
    ProductoComponent,
    VentaComponent,
    NuevoclienteComponent,
    EditarclienteComponent,
    ListarclienteComponent,
    ConsolidadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
