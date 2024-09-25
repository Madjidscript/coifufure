import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ClientComponent } from './client.component';
import { TestapiComponent } from './testapi/testapi.component';
import { HotelsAPiComponent } from './hotels-api/hotels-api.component';

const routes: Routes = [
  {path:"",component:ClientComponent,
    children:[
      {path:"",redirectTo:"accueil",pathMatch:"full"},
      {path:"accueil",component:AccueilComponent},
      {path:"connexion",component:ConnexionComponent},
      {path:"inscription",component:InscriptionComponent},
      {path:"api",component:TestapiComponent},
      {path:"hotels",component:HotelsAPiComponent}
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
