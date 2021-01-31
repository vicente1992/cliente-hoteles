import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../interfaces/hotel.interface';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  public loading: boolean = false;
  constructor(
    private hotelService: HotelService
  ) {

  }

  ngOnInit(): void {
    this.getHotels();
  }

  get hotels() {
    return this.hotelService.hotels;
  }

  private getHotels() {
    this.loading = true;
    this.hotelService.getHotels().subscribe(hotels => {
      this.hotelService.hotels = hotels;
      this.loading = false;
    })
  }

}
