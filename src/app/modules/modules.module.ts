import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './base/login/login.component';
import { NavbarComponent } from './base/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegistrarComponent } from './base/registrar/registrar.component';



@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
