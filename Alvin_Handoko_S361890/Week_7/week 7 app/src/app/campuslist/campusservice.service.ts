import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campus } from '../campus';

@Injectable({
  providedIn: 'root',
})
export class CampusserviceService {
  [x: string]: any;
  constructor(private http: HttpClient) {}

  getCampuses() {
    return this.http.get<Campus[]>('https://localhost:7246/api/Campus', {
      withCredentials: true,
    });
  }
  postCampus(campusList: Campus) {
    return this.http.post('https://localhost:7246/api/Campus', campusList, {
      withCredentials: true,
    });
  }
  putCampus(campusList: Campus) {
    return this.http.put(
      'https://localhost:7246/api/Campus/update',
    campusList,
      { withCredentials: true }
    );
  }
  deleteCampus(CampusId: number) {
    return this.http.delete('https://localhost:7246/api/Campus/' + CampusId, {
      withCredentials: true,
    });
  }
}
