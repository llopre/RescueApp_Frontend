import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { Usuario } from 'src/app/core/models/usuario';
import { AlertaService } from 'src/app/core/services/alerta.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;

  @Input() titulo : String;
  @Output() toggle: EventEmitter<string> = new EventEmitter(); // Test comunic

  nro: number = 3;
  resp: any = {};
  usu: Usuario = new Usuario();
  
  //inputCUIL : any;
  //inputPass: string = '';

  constructor(private _usuarioService: UsuarioService,
              private formBuilder: FormBuilder,
              private _alertaService: AlertaService) {

    this.titulo = '';
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      inputCUIL: [''],
      inputPass: ['']
    });
  }
  
  submit(): void{
    
    this._usuarioService.logueoUsuario(this.form.value.inputCUIL, this.form.value.inputPass).subscribe(respuesta =>{
        
        if(respuesta.cuil){
        this.toggle.emit(respuesta.nombre);
        this._alertaService.success("Confirmación","Se ingresó al sistema");
        }
        else{
          console.log("no trajo usuario");
        }
  
    }, error =>{ 
      console.log("error: " + error);
    })
    
  }
  
} 



/*
    this._usuarioService.testDeGetUsuario(this.inputCUIL).subscribe(respuesta =>{
      
      respuesta.forEach(x => {
        this.usu = x;
        
        console.log("Imprimo apellido: " + this.usu.apellido);
        this.toggle.emit(this.usu.nombre);
        
      })
      
      
    }, error =>{
      console.log("error: " + error);
    })
    */

//@HostListener('click') // Test Comunic
//click() {
//  this.toggle.emit(this.usu.nombre);
//}