import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule ,FormGroup, Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent implements OnInit{
  data!:FormGroup
  constructor(private fb:FormBuilder, private route:Router){
  }
  ngOnInit() {
    this.data = this.fb.group({
     email:['',[Validators.required]],
     password:['',Validators.required]
    })
  }
   validation(event:Event){
    event.preventDefault()
    console.log("paapapapapa")
    if (this.data.valid) {
      console.log("mon data",this.data.value)
      this.route.navigate(['/client/inscription'])
    }

   }
}
