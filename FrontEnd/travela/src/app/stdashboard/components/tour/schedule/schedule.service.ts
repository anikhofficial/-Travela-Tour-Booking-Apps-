import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export const apiUrl = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }
  addSchedule(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/api/schedule`, data);
  }

  getAllSchedules(): Observable<any> {
    return this.http.get(`${apiUrl}/api/schedules`);
  }

  getAllSchedulesById(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/api/schedule/` + id);
  }

  deleteSchedule(id: number): Observable<any> {
    return this.http.delete(`${apiUrl}/api/schedule/` + id);
  }

}
