import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hotel } from '../interfaces/hotel.interface';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private url_base: string = environment.url_base;
  public hotels: Hotel[] = [];
  public loading: boolean = false;
  constructor(
    private http: HttpClient
  ) { }


  public getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.url_base}/hotels`);

  }

  public searchHotels(type: 'starts' | 'name', param: string | number) {
    return this.http.get<Hotel[]>(`${this.url_base}/hotels/${type}/${param}`);

  }
}
