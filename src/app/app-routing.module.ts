import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
  path: 'home',
  component: HomeComponent
  },
  {
    path: '',
    component: LoginComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
