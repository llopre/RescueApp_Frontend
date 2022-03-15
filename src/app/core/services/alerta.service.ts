import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { }

  public success(title: string, message: string): void{
    Swal.fire(
      title,
      message,
      'success'
    );
  }

  public warning(title: string, message: string): void{
    Swal.fire(
      title,
      message,
      'warning'
    );
  }

  public question(title: string, message: string): void{
    Swal.fire(
      title,
      message,
      'question'
    );
  }

  public error(title: string, message: string): void{
    Swal.fire(
      title,
      message,
      'error'
    );
  }

  public confirmacion(titulo: string){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: titulo,
      showConfirmButton: false,
      timer: 2000
    })
  }

  public fail(titulo: string){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: titulo,
      showConfirmButton: false,
      timer: 2000
    })
  }

}
