import { Component, OnInit } from '@angular/core';
import { MonApiService } from '../../mon-api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hotels-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotels-api.component.html',
  styleUrls: ['./hotels-api.component.css']
})
export class HotelsAPiComponent implements OnInit {
  data:any
  constructor(private api:MonApiService){}
  ngOnInit(): void {
    this.getfoot()
  }

  getfoot(){
    this.api.gethotel().subscribe({
      next:(response:any)=> {
        this.data=response
        console.log("mon data",this.data)
      },
      error:(err)=> {
        console.log("ereorroro",err)
      },
      complete() {},
    })
  }

}
