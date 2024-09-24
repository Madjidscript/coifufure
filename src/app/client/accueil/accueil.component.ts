import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [ButtonModule,RouterLink],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  constructor(private route:Router) {
    
  }

  commencer(){
    this.route.navigate(["/client/connexion"])
  }

}
