import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tienda';

  nombre:string = "Pablo Londoño"; //Binding por interpolación
  numero:number = 3.14;
  booleano:boolean = true;
  cualquiera:any = "Cualquier dato"; 

  sumar(num1:number, num2:number):number{
    return num1 * num2
    }
nuevo_valor:string="red";
nuevo_tipo:string="text";

titulo1:string="Titulo Nuevo";
mostrartitulo(){
  this.titulo1="Otro Título";
}

//directivas
persona1:string="Pablo";
persona1sexo:string="m";

lista=Array()
llenarlista(){
  for (let i = 0; i < 10; i++) {
    this.lista.push(Math.random());
  }

  }

  nombre_estudiante:string="";

}