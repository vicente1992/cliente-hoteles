import { Component, Input, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  @Input() loading: boolean = false;
  constructor(
    private hotelService: HotelService
  ) { }

  ngOnInit(): void {

  }



}
