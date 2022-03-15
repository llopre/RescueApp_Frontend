import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { RegistrarComponent } from './modules/base/registrar/registrar.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent 
  },
  {
    path:'registrar',
    component: RegistrarComponent
  }

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
