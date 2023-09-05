import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(this.apiUrl);
  }

  getItem(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createItem(item: any) {
    return this.http.post(this.apiUrl, item);
  }

  updateItem(id: number, item: any) {
    return this.http.put(`${this.apiUrl}/${id}`, item);
  }

  deleteItem(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
