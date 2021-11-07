import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';
  
  user_correcto:string="admininicial";
  pass_correcto:string="admin123456";

  user:string="";
  pass:string="";

  correcto:number=-1;

  // si queremos más usuarios
  lista_users =["diego","carjim","admin","user"];

  comparar(){
    if(this.user===this.user_correcto){
      this.correcto=1;
      if(this.pass===this.pass_correcto){
        this.correcto=1;
      }else{
        this.correcto=0;
      }
    }else{
      this.correcto=0;
    }
  }
  

}