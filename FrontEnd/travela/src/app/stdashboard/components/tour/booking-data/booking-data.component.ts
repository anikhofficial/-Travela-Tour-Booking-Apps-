import { Component, OnInit } from '@angular/core';
import { BookingDataService } from './booking-data.service';
import { Response } from '../../../../model/response.model';

@Component({
  selector: 'app-booking-data',
  templateUrl: './booking-data.component.html',
  styleUrl: './booking-data.component.scss'
})
export class BookingDataComponent implements OnInit {
  bookings: any = [];
  constructor(private bookingDataService: BookingDataService) { }

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings() {
    this.bookingDataService.getAllBookings().subscribe((data: Response<any>) => {
      console.log(data);
      this.bookings = data;
    })
  }

}
