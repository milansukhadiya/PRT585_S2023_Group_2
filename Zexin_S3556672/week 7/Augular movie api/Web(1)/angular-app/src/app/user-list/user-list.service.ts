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

  createUser(user:any){
    const url = `${this.baseUrl}/api/User/CreateUser`;
    return this.http.post(url,user);
  }
  editUser(id:number,user:any){
    const url = `${this.baseUrl}/api/User/EditUser?id=${id}`;
    return this.http.post(url,user);
  }
  delUser(id:number){
    const url = `${this.baseUrl}/api/User/DelUser?id=${id}`;
    return this.http.post(url,null);
  }
}
