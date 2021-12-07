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

  crea: number=-1;
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
        this.crea=0;
        this.elimina=-1;
        this.actualiza=-1;
        this.encuentra=-1;
        
      });    
  }
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
          this.crea=-1;
          this.elimina=-1;
          this.actualiza=-1;
          this.encuentra=0;

      }
      
    }); 
      
    
  }
  elimina:number=-1;
  eliminar_cliente(){

    //this.res_get = this.objetohttp.delete(this.urlapiGET).subscribe();
    this.objetohttp.delete(this.baseApiUrl+"/"+this.cedula_cliente).subscribe();
    console.log(this.res_get);
    this.elimina=0;
    this.crea=-1;
    
    this.actualiza=-1;
    this.encuentra=-1;
    //this.res_get.subscribe((data:any[])=>{
     // this.contenido=data;
      //console.log(this.contenido);
    }
    //this.nombre_cliente=this.res_get.nombreCompleto;
//    this.cedula_cliente=this.res_get.cedula; // no es necesario asignarla
    //this.dir_cliente=this.res_get.direccion;
    //this.telefono_cliente=this.res_get.telefono;
   // this.correo_cliente=this.res_get.correo

   actualiza:number=-1;
   actualizar_cliente(){
    this.objetohttp.put<any>(this.baseApiUrl+"/"+this.cedula_cliente,
      {
        cedula: this.cedula_cliente,
        nombreCompleto: this.nombre_cliente,
        direccion: this.dir_cliente,
        telefono: this.telefono_cliente,
        correo:this.correo_cliente
      },{observe: 'response'}).subscribe(response=>{
        this.codigorespuesta=response.status;
        this.actualiza=0;
        this.crea=-1;
        this.elimina=-1;
        
        this.encuentra=-1;
      });    
  }

  refresh(): void {
    window.location.reload();
}
}



