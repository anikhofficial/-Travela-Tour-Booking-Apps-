import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export const apiUrl = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class TouraddService {

  constructor(private http: HttpClient) { }
  signup(userData: any): Observable<any> {
    return this.http.post(`${apiUrl}/api/tour`, userData);
  }
  getAllTours(): Observable<any> {
    return this.http.get(`${apiUrl}/api/tours`);
  }
  getAllToursById(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/api/tour/` + id);
  }
  deleteTour(id: number): Observable<any> {
    return this.http.delete(`${apiUrl}/api/tour/` + id);
  }
 
}
