import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MonApiService {
 private url="https://api.thecatapi.com/v1/images/search?limit=10"
 private hotelUrl='https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554'
  constructor( private http:HttpClient) { }

  getData(){
    return this.http.get(this.url)
  }




  gethotel(){
    const headers = new HttpHeaders({
     'x-rapidapi-key': '0719001454msh8ef461c81cef186p1c5658jsnb18ce689203a',
		'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
    });
    return this.http.get(this.hotelUrl,{headers})
  }



  


}


