import { Component, OnInit } from '@angular/core';
import { MonApiService } from '../../mon-api.service';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-testapi',
  standalone: true,
  imports: [CommonModule,GalleriaModule],
  templateUrl: './testapi.component.html',
  styleUrl: './testapi.component.css'
})
export class TestapiComponent implements OnInit {
  data:any
  responsiveOptions: any[] | undefined;
  constructor(private api:MonApiService){}
  ngOnInit(){
   this.get()
   this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
  }

  get(){
    this.api.getData().subscribe({
      next:(response:any)=>{
        this.data= response
        console.log("mon apiii",this.data)
      },

      error(err:any) {
        console.log("mon erreur",err);
      },
      complete(){},
    })
  }


}
