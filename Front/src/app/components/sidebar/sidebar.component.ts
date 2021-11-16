import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
   
  
  {
    path: "/dashboard",
    title: "Principal",
    rtlTitle: "Users",
    icon: "icon-chart-pie-36",
    class: ""
  },

  {
    path: "/typography",
    title: "Ingresar",
    rtlTitle: "Login",
    icon: "icon-align-center",
    class: ""
  },

  {
    path: "/tables",
    title: "Usuarios",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: ""
},
  {
    path: "/icons",
    title: "Clientes",
    rtlTitle: "Clients",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/maps",
    title: "Proveedores",
    rtlTitle: "Supplier",
    icon: "icon-pin",
    class: "" },
  {
    path: "/notifications",
    title: "Productos",
    rtlTitle: "Products",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/user",
    title: "Reportes",
    rtlTitle: "Reports",
    icon: "icon-single-02",
    class: ""
  },
 
 
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
