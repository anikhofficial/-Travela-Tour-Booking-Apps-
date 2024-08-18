import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export const apiUrl = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient ) { }
  addLocation(locationData: any): Observable<any> {
    return this.http.post(`${apiUrl}/api/location`, locationData);
  }
getAllLocations(): Observable<any> {
  return this.http.get(`${apiUrl}/api/locations`);
}

getAllLocationsById(id: number): Observable<any> {
  return this.http.get(`${apiUrl}/api/location/` + id);
}

deleteLocation(id: number): Observable<any> {
  return this.http.delete(`${apiUrl}/api/location/` + id);
}

}
