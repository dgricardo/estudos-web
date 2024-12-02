import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemperaturaService {
  private apiUrl = 'http://localhost:8080/realtime/v1/temperaturas';

  constructor(private http: HttpClient) {}

  getTemperatura(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
