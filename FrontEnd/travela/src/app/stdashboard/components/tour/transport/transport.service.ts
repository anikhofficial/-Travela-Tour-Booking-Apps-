import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const apiUrl = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private http: HttpClient) { }

  addTransport(transportData: any): Observable<any> {
    return this.http.post(`${apiUrl}/api/transport`, transportData);
  }

  getAllTransports(): Observable<any> {
    return this.http.get(`${apiUrl}/api/transports`);
  }

  getAllTransportsById(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/api/transport/` + id);
  }

  deleteTransport(id: number): Observable<any> {
    return this.http.delete(`${apiUrl}/api/transport/` + id);
  }
}
