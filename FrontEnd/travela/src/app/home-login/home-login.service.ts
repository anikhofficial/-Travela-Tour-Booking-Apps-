import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../model/response.model';
import { Observable } from 'rxjs';
import { apiUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class HomeLoginService {
  constructor(private http: HttpClient) { }

  login(userData: { username: string, password: string }): Observable<Response<any>> {
    return this.http.post<Response<any>>(`${apiUrl}/user/login`, userData);
  }

  signup(userData: any): Observable<Response<any>> {
    return this.http.post<Response<any>>(`${apiUrl}/user/save`, userData);
  }
}
