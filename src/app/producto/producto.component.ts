import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  dtOptions: { pagingType: string; columns: { title: string; }[]; pageLength: number; responsive: boolean; language: { processing: string; search: string; lengthMenu: string; info: string; infoEmpty: string; infoFiltered: string; infoPostFix: string; loadingRecords: string; zeroRecords: string; emptyTable: string; paginate: { first: string; previous: string; next: string; last: string; }; aria: { sortAscending: string; sortDescending: string; }; }; } | undefined;

  //Función constructora
  constructor(private objetohttp: HttpClient, private fileUploadService: FileUploadService) { }

  ///////////////// GET /////////////////////////////
  //opciones y objeto revisor de la tabla
  //dtOptions: DataTables.Settings= {};
  dtTrigger: Subject<any> = new Subject<any>();

  //variable receptora de documentos
  res: any;
  //variable contenedora de contenidos
  contenido: any;
  //url api get
  urlapiGET: string = "http://localhost:8080/api/productos";

  //FUNCIÓN DE CONTROL DE ERRORES
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido!';
    if (error.error instanceof ErrorEvent) {
      // Errores del lado del cliente
      errorMessage = `Error: ${error.error.message}\n ${error.status}`;
    } else {
      // Errores del lado del servidor
      errorMessage = `Codigo de Error: ${error.status} \nMensaje: ${error.message}`;
    }
    //MOSTRANDO UN ERROR EN UNA ALERTA
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }

  //aliminando objeto revisor de cambios de la tabla
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }



  ///////////////// METODOS ANGULAR /////////////////////////////

  //FUNCIÓN DE EJECUCIÓN ANTES DE LA CARGA DE LA PAGINA
  ngOnInit(): void {
    //utilizando el servicio en la url
    this.res = this.objetohttp.get(this.urlapiGET).pipe(catchError(this.handleError));

    //suscribe el archivo json y lo convierte   
    this.res.subscribe((datos: any[]) => {
      this.contenido = datos;
      console.log(this.contenido);
      this.dtTrigger.next(this.dtOptions);
    });

    //Opciones especiales de la tabla, localización y caracteristicas
    this.dtOptions = {
      pagingType: 'full_numbers',
      columns: [{
        title: 'codigoproducto',
      }, {
        title: 'ivacompra',
      }, {
        title: 'nitproveedor',
      }, {
        title: 'nombreproducto',
      }, {
        title: 'preciocompra',
      }, {
        title: 'precioventa'
      }],
      pageLength: 10,
      responsive: true,
      language: {
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ elementos",
        info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
        infoEmpty: "Mostrando ningún elemento.",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        },
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        }
      }
    };
  }

  ///////////////// POST /////////////////////////////
  codigoRespuesta: number = 0;
  res2: any;

  //lista que almacenara los resultados de la insercion de cada linea
  resultados: any;

  // Variable to store shortLink from api response
  file!: File; //variable para almacenar los datos

  //variable de confimación de recepcion de archivo
  recibido: boolean = false;

  // En caso de seleccionar archivo, escojer el primer archivo
  /*onChange(event: any) {
    if(event.target.files[0]){
      this.archivo=1;

    }if(event.target.files[''] ){
      this.archivo=0;

    }
    //this.file = event.target.files[0];
    //console.log(this.file);
  }
  */

  archivo: number = -1;
  // En caso de seleccionar archivo, escojer el primer archivo
  onChange(event: any) {
    this.file = event.target.files[0];
    let nombarc = this.file.name;
    console.log(nombarc);
    if (event.target.files[0]) {
      let extension;
      extension = nombarc.substring(nombarc.lastIndexOf('.') + 1).toLowerCase();
      console.log(extension);
      if (extension == 'csv') {
        this.archivo = 1;
      } else {
        this.archivo = 0;
      }
    } else {
      this.archivo = 0;
    }
  }

  valida: number = -1;

  // Cuando haga click, iniciar proceso de envio
  async onUpload() {
    this.res = this.objetohttp.delete(this.urlapiGET).subscribe();
    console.log(this.res);
    this.resultados = await this.fileUploadService.upload(this.file);
    console.log(this.resultados);
    //window.location.reload();
    this.valida = 0;
    console.log(this.resultados.status);

  }

  refresh(): void {
    window.location.reload();
  }

}