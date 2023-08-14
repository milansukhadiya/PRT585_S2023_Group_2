import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private baseUrl = 'http://localhost:59762'; // 替换为你的 API 地址
  constructor(private http: HttpClient) { }

  getGetUserList(): Observable<any> {
    const url = `${this.baseUrl}/api/User/GetUserList`;
    return this.http.get(url);
  }
}
