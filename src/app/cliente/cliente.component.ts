import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private objetohttp:HttpClient) { }

  ngOnInit(): void {
  }

  title = 'Clientes';
  baseApiUrl = "http://localhost:8080/api/cliente";

  cedula_cliente!:string;
  nombre_cliente!:string;
  dir_cliente!:string;
  telefono_cliente!:string;
  correo_cliente!:string;
  codigorespuesta!:number;
  res_get:any;
  contenido:any;
  encontro_cliente:number=-1;

  crear_cliente(){
    this.objetohttp.post<any>(
      this.baseApiUrl,
      {
        cedula: this.cedula_cliente,
        nombreCompleto: this.nombre_cliente,
        direccion: this.dir_cliente,
        telefono: this.telefono_cliente,
        correo:this.correo_cliente
      },{observe: 'response'}).subscribe(response=>{
        this.codigorespuesta=response.status;
      });    
  }

  buscar_cliente(){
    this.res_get=this.objetohttp.get(this.baseApiUrl+"?cedula="+this.cedula_cliente);
    this.res_get.subscribe((data:any[])=>{
      this.contenido=data;
      console.log(this.contenido);
    }); 
    this.nombre_cliente=this.res_get.nombreCompleto;
//    this.cedula_cliente=this.res_get.cedula; // no es necesario asignarla
    this.dir_cliente=this.res_get.direccion;
    this.telefono_cliente=this.res_get.telefono;
    this.correo_cliente=this.res_get.correo;  
  }

}
