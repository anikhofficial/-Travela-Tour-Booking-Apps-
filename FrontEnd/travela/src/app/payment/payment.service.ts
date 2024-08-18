import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }
  savePayment(paymentData: any): Observable<any> {
    return this.http.post(`${apiUrl}/api/payments`, paymentData);
  }

  getAllPayments(): Observable<any> { 
    return this.http.get(`${apiUrl}/api/payments`);
  }

  getAllPaymentsById(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/api/payments/` + id);
  }

  deletePayment(id: number): Observable<any> {
    return this.http.delete(`${apiUrl}/api/payments/` + id);
  }
}
