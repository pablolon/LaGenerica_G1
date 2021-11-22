import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VentaComponent } from './venta/venta.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

  {
  path: 'sidebar',
  component: SidebarComponent
  },

  {
    path: 'login',
    component: LoginComponent
    },

  {
    path: 'home',
    component: HomeComponent
    },
  
  {
    path: 'usuario',
    component: UsuarioComponent
  },

  {
    path: 'proveedor',
    component: ProveedorComponent
  },

  {
    path: 'producto',
    component: ProductoComponent
  },

  {
    path: 'cliente',
    component: ClienteComponent
  },

  {
    path: 'venta',
    component: VentaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
