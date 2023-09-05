import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseUrl = 'http://localhost:59762'; // 替换为你的 API 地址
  constructor(private http: HttpClient) { }

  sendEmail(obj): Observable<any> {
    const url = `${this.baseUrl}/api/User/sendEmail`;
    return this.http.post(url,obj);
  }
}
