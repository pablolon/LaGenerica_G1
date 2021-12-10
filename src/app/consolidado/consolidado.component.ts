import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cliente',
  templateUrl: './consolidado.component.html',
  styleUrls: ['./consolidado.component.css']
})
export class ConsolidadoComponent implements OnInit {

  constructor(private objetohttp:HttpClient) { }

  

  ngOnInit(): void {

    this.res_get=this.objetohttp.get(this.baseApiUrl);
    this.res_get.subscribe((data:any[])=>{
    this.contenido=data;
      console.log(this.contenido);
    this.ciudad=this.contenido[0].ciudad;
    this.totalventas = this.contenido[0].totalventas;
    });
    
  }

  title = 'Consolidado';
  baseApiUrl = "http://localhost:8080/api/consolidados";

  ciudad!:string;
  totalventas!:string;
  codigorespuesta!:number;
  res_get:any;
  contenido:any;
  encontro_cliente:number=-1;

  

  refresh(): void {
    window.location.reload();
  }
}