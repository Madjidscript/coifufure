import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CoiffeurComponent } from './coiffeur.component';

const routes: Routes = [
  {path:"",component:CoiffeurComponent,
    children:[
      {path:"",redirectTo:"connexion",pathMatch:"full"},
      {path:"connexion",component:ConnexionComponent},
      {path:"inscription",component:InscriptionComponent},
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoiffeurRoutingModule { }
