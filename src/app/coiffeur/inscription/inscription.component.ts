import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [RouterLink,RouterModule,ReactiveFormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent implements OnInit {

  data!:FormGroup
  constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.data = this.fb.group({
      nom:["",[Validators.required]],
      email:["",[Validators.required]],
      password:["",[Validators.required]],
      contact:["",[Validators.required]],
      longitude:[""],
      altitude:[""]

    })
  }
  validation(event:Event){
    event.preventDefault()
    console.log("papapapapapappapa")
    if (this.data.valid) {
      console.log("mon dataaaaa",this.data.value)
      
    }
  }

}
