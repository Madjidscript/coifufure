import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {path:"",component:ClientComponent,
    children:[
      {path:"",redirectTo:"accueil",pathMatch:"full"},
      {path:"accueil",component:AccueilComponent},
      {path:"connexion",component:ConnexionComponent},
      {path:"inscription",component:InscriptionComponent}
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
