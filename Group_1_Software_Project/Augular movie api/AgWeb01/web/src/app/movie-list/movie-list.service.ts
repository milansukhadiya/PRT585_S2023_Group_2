import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  private baseUrl = 'http://localhost:59762'; // 替换为你的 API 地址
  constructor(private http: HttpClient) { }

  getGetList(): Observable<any> {
    const url = `${this.baseUrl}/api/Movie/GetList`;
    return this.http.get(url);
  }

  create(user:any){
    const url = `${this.baseUrl}/api/Movie/Create`;
    return this.http.post(url,user);
  }
  edit(id:number,user:any){
    const url = `${this.baseUrl}/api/Movie/Edit?id=${id}`;
    return this.http.post(url,user);
  }
  del(id:number){
    const url = `${this.baseUrl}/api/Movie/Delete?id=${id}`;
    return this.http.post(url,null);
  }
}
