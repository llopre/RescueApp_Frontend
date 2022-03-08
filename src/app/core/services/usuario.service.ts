///////////
import { Injectable } from '@angular/core';
import { IResourceMethod, IResourceMethodObservable, IResourceMethodPromise, Resource, ResourceAction, ResourceHandler, ResourceParams, ResourceRequestBodyType, ResourceRequestMethod, ResourceResponseBodyType } from '@ngx-resource/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


//@ResourceParams({
//  pathPrefix: `${environment.apiUrl}/api`
//})

export class UsuarioService {
  
  private MI_API = `${environment.apiUrl}/api/entidad/` 
  

  constructor(requestHandler: ResourceHandler, 
              private http: HttpClient) {

    //super(requestHandler); -- Era por el extends resource
  }

  //GET -- Prueba del back con un get
  public testDeGetUsuario(cuil : number) : Observable<Usuario[]>{
    const URL = this.MI_API + 'getUsuario/' + cuil;

    return this.http.get<Usuario[]>(URL);
  } 


  //PUT -- Login con cuil y clave
  public logueoUsuario(cuil : string, clave: string) : Observable<Usuario>{
    const URL = this.MI_API + 'getUsuario/';

    var fd = new FormData();
    fd.append('cuil', cuil);
    fd.append('clave', clave);

    return this.http.put<Usuario>(URL, fd).pipe(catchError(this.handleError))
    
  }


  //Manipular y mostrar errores en los request
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


 

  /*

  const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
    }

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    requestBodyType: ResourceRequestBodyType.FORM_DATA,
    responseBodyType: ResourceResponseBodyType.Json,
    path: '/entidad/{!nro}' 
  })
  getUsr!: IResourceMethodPromise<{nro: number}, number>; 
   */


}
