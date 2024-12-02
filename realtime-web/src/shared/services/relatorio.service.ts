import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RelatorioService {
  private apiUrl = 'http://localhost:8080/realtime/v1/relatorios';

  constructor(private http: HttpClient) {}

  getRelatorios(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
