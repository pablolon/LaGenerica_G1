import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar_clientes',
  templateUrl: './listar_clientes.component.html',
  styleUrls: ['./listar_clientes.component.css']
})
export class ListarclientesComponent implements OnInit {

  constructor(private objetohttp:HttpClient) { }

  

  ngOnInit(): void {

    this.res_get=this.objetohttp.get(this.baseApiUrl);
    this.res_get.subscribe((data:any[])=>{
    this.contenido=data;
      console.log(this.contenido);
    this.cedula_cliente=this.contenido[0].cedula;
    this.nombre_cliente = this.contenido[0].nombreCompleto;
    this.dir_cliente=this.contenido[0].direccion;
    this.telefono_cliente=this.contenido[0].telefono;
    this.correo_cliente=this.contenido[0].correo;
    });
    
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

  
  encuentra: number=-1;
  buscar_cliente(){

     
    this.res_get=this.objetohttp.get(this.baseApiUrl+"?cedula="+this.cedula_cliente);
    //this.res_get=this.objetohttp.get(this.baseApiUrl+"/"+this.cedula_cliente);
    this.res_get.subscribe((data:any[])=>{
      this.contenido=data;

      console.log("Buscando cliente");
      console.log(this.contenido);
      if(this.contenido==null){
        this.encuentra=1;
        this.nombre_cliente="";
        //    this.cedula_cliente=this.res_get.cedula; // no es necesario asignarla
            this.dir_cliente="";
            this.telefono_cliente="";
            this.correo_cliente="";
      }else{
        //this.nombre_cliente=this.contenido[0].nombreCompleto;
      this.nombre_cliente=this.contenido[0].nombreCompleto;
      //    this.cedula_cliente=this.res_get.cedula; // no es necesario asignarla
          this.dir_cliente=this.contenido[0].direccion;
          this.telefono_cliente=this.contenido[0].telefono;
          this.correo_cliente=this.contenido[0].correo;
          
      }
      
    }); 
      
    
  }
   

  refresh(): void {
    window.location.reload();
}
}



