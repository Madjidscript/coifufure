import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:"",component:AppComponent,
        children:[
            {path:"", redirectTo:"client",pathMatch:"full"},
            {path:"client",loadChildren:()=>import("./client/client.module").then(m=>m.ClientModule)},
            {path:"admin",loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule)},
            {path:"coiffeur",loadChildren:()=>import("./coiffeur/coiffeur.module").then(m=>m.CoiffeurModule)}

        ]
    }
];
