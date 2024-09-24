import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [RouterLink,RouterModule,ReactiveFormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent implements OnInit {
data!:FormGroup
constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.data = this.fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }




validation(event:Event){

  if (this.data.valid) {
    console.log("ma validation",this.data.value)
  }
}

}
