import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../../../../constants';

@Injectable({
  providedIn: 'root'
})
export class PaymentListService {

  constructor(private http: HttpClient) { }
  getAllPayments(): Observable<any> {
    return this.http.get(`${apiUrl}/api/payments`);
  }
}
