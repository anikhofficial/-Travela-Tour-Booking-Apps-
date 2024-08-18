import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  getAllTours(): Observable<any> {
    return this.http.get(`${apiUrl}/api/tours`);
  }

  saveBooking(booking: any): Observable<any> {
    return this.http.post(`${apiUrl}/api/booking`, booking);
  }

  getAllBookings(): Observable<any> {
    return this.http.get(`${apiUrl}/api/bookings`);
  }

  getBookingById(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/api/booking/${id}`);
  }

  updateBooking(booking: any): Observable<any> {
    return this.http.put(`${apiUrl}/api/bookings/${booking.id}`, booking);
  }
  updateBookingStatus(id: number, status: string): Observable<any> {
    return this.http.patch(`${apiUrl}/api/bookings/${id}/status`, null,{ params: { status } });
  }
}
