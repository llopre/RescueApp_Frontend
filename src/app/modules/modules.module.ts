import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './base/login/login.component';
import { NavbarComponent } from './base/navbar/navbar/navbar.component';



@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
