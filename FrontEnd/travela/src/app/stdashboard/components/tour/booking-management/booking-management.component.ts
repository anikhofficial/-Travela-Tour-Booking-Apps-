import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../../../booking/booking.service';

@Component({
  selector: 'app-booking-management',
  templateUrl: './booking-management.component.html',
  styleUrl: './booking-management.component.scss'
})
export class AdminBookingManagementComponent implements OnInit {
  bookings: any = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.bookingService.getAllBookings().subscribe(data => {
      this.bookings = data;
    });
  }

  updateStatus(booking: any, status: string): void {
    booking.status = status;
    this.bookingService.saveBooking(booking).subscribe(() => {
      booking.status = status;
    });
  }
}