import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export const apiUrl = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) { }

  getAllTours(): Observable<any> {
    return this.http.get(`${apiUrl}/api/tours`);
  }
}
