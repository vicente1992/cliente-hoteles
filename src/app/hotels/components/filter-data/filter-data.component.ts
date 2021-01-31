import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { valueStart } from '../../interfaces/hotel.interface';
import { HotelService } from '../../services/hotel.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.css']
})
export class FilterDataComponent implements OnInit {
  @ViewChild('nameHotel') nameHotel: ElementRef<HTMLInputElement>;
  public starts: number[] = valueStart;
  public start: number;
  public startSelectec: number;
  constructor(
    private hotelService: HotelService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {
  }

  public search(name: string = '') {
    this.startSelectec = null;
    if (this.nameHotel.nativeElement.value.trim().length === 0) {
      this.hotelService.getHotels();
      return;
    };
    this.hotelService.searchHotels('name', name)
      .subscribe(hotels => {
        this.hotelService.hotels = hotels;
      }, (error) => {
        this.toastr.error('Error', error.error.message);
        this.hotelService.hotels = [];

      });
  }

  public selectStart(start: number) {
    this.nameHotel.nativeElement.value = '';
    this.hotelService.searchHotels('starts', start)
      .subscribe(hotels => {
        this.hotelService.hotels = hotels;
      }, (error) => {
        this.toastr.error('Error', error.error.message);
      });
  }


}
