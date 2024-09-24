import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule ,FormBuilder,Validators, FormGroup} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent implements OnInit {
  data!:FormGroup
  constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.data= this.fb.group({
      nom:['',[Validators.required]],
      contact:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
 
  
 validation(event:Event){
  event.preventDefault()
  console.log("rrrrrrrrr")
  if (this.data.valid) {
    console.log("mon objet present",this.data.value)
  }
 }

}
