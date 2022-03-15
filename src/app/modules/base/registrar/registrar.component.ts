import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { AlertaService } from 'src/app/core/services/alerta.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  public form!: FormGroup;

  constructor(private _usuarioService: UsuarioService,
              private formBuilder: FormBuilder,
              private _alertaService: AlertaService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      cuil: [''],
      clave: [''],
      claveRep: [''],
      email: [''],
      emailRep: [''],
      localidad: ['']
    });
  }

}
