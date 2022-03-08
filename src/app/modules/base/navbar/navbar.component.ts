import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @HostBinding('class.usuario') @Input()
  usuario : String = "No logueado";



  usuarioNav : any;

  constructor() { }

  ngOnInit(): void {
    this.usuario = "No logueado";
  }

}
