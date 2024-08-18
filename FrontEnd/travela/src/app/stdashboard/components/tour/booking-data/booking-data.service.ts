import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../../../../constants';

@Injectable({
  providedIn: 'root'
})
export class BookingDataService {

  constructor(private http: HttpClient) { }
  getAllBookings(): Observable<any> {
    return this.http.get(`${apiUrl}/api/bookings`);
  }
}
