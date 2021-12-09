import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private objetohttp:HttpClient) { }

  ngOnInit(): void {

    this.res_get=this.objetohttp.get(this.baseApiUrl);
    this.res_get.subscribe((data:any[])=>{
    this.contenido=data;
      console.log(this.contenido);
    this.nombre_usuario = this.contenido[0].nombrecompleto;
    this.password_usuario=this.contenido[0].password;
    this.usuario_usuario=this.contenido[0].username;
    this.correo_usuario=this.contenido[0].email;
    });
    
  }

  title = 'usuarios';
  baseApiUrl = "http://localhost:8080/api/usuario";

  nombre_usuario!:string;
  password_usuario!:string;
  usuario_usuario!:string;
  correo_usuario!: string;
  
  codigorespuesta!:number;
  res_get:any;
  contenido:any;
  encontro_usuario:number=-1;

  crea: number=-1;
  crear_usuario(){
      
      this.objetohttp.post<any>(
      this.baseApiUrl,
      
      {
        nombrecompleto: this.nombre_usuario,
        password: this.password_usuario,
        username: this.usuario_usuario,
        email:this.correo_usuario        
        
      },{observe: 'response'}).subscribe(response=>{
        this.codigorespuesta=response.status;
        this.crea=0;
        this.elimina=-1;
        this.actualiza=-1;
        this.encuentra=-1;
        
      });    
  }
  encuentra: number=-1;
  buscar_usuario(){

     
    this.res_get=this.objetohttp.get(this.baseApiUrl+"?username="+this.usuario_usuario);
    //this.res_get=this.objetohttp.get(this.baseApiUrl+"/"+this.cedula_usuario);
    this.res_get.subscribe((data:any[])=>{
      this.contenido=data;

      console.log("Buscando Usuario");
      console.log(this.contenido);
      if(this.contenido==null){
        this.encuentra=1;
        this.usuario_usuario="";
        //    this.cedula_usuario=this.res_get.cedula; // no es necesario asignarla
            this.password_usuario="";
            this.nombre_usuario="";
            this.correo_usuario="";
      }else{
        //this.nombre_usuario=this.contenido[0].nombreCompleto;
      this.usuario_usuario=this.contenido[0].username;
      //    this.cedula_usuario=this.res_get.cedula; // no es necesario asignarla
          this.nombre_usuario=this.contenido[0].nombrecompleto;
          this.password_usuario=this.contenido[0].password;
          this.correo_usuario=this.contenido[0].email;
          this.crea=-1;
          this.elimina=-1;
          this.actualiza=-1;
          this.encuentra=0;

      }
      
    }); 
      
    
  }
  elimina:number=-1;
  eliminar_usuario(){

    //this.res_get = this.objetohttp.delete(this.urlapiGET).subscribe();
    this.objetohttp.delete(this.baseApiUrl+"/"+this.usuario_usuario).subscribe();
    console.log(this.res_get);
    this.elimina=0;
    this.crea=-1;
    
    this.actualiza=-1;
    this.encuentra=-1;
    }
   actualiza:number=-1;
   actualizar_usuario(){
    this.objetohttp.put<any>(this.baseApiUrl+"/"+this.usuario_usuario,
      {
        username: this.usuario_usuario,
        nombrecompleto: this.nombre_usuario,
        password: this.password_usuario,
        email: this.correo_usuario,
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