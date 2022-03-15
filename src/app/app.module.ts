import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ResourceModule } from '@ngx-resource/handler-ngx-http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './modules/base/login/login.component';
import { NavbarComponent } from './modules/base/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './modules/home/home.component';
import { RouterModule } from '@angular/router';
import { RegistrarComponent } from './modules/base/registrar/registrar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ResourceModule.forRoot(),
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
