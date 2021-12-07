import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  constructor(private objetohttp: HttpClient){ }

  

  ngOnInit(): void {
    
  }
  baseApiUrl: string = "http://localhost:8080/api/cliente";
  codigoRespuesta!: number;
  res_get: any;

  encuentra: number = -1;
  contenido!: any;

  id!: string;
  cedula_cliente!: string;
  nombre_cliente!: string;
  consecutivo!: any;
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
       
      }else{
     

      }
      
    }); 
      
    
  }

}
