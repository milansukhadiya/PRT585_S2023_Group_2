import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classroom } from '../classroom';

@Injectable({
  providedIn: 'root',
})
export class ClassroomserviceService {
  [x: string]: any;
  constructor(private http: HttpClient) {}

  getClassrooms() {
    return this.http.get<Classroom[]>('https://localhost:7246/api/Classroom', {
      withCredentials: true,
    });
  }
  postClassroom(classroomList: Classroom) {debugger
    return this.http.post('https://localhost:7246/api/Classroom', classroomList, {
      withCredentials: true,
    });
  }
  putClassroom(classroomList: Classroom) {
    return this.http.put(
      'https://localhost:7246/api/Classroom/update',
      classroomList,
      { withCredentials: true }
    );
  }
  deleteClassroom(ClassroomId: number) {
    return this.http.delete('https://localhost:7246/api/Classroom/' + ClassroomId, {
      withCredentials: true,
    });
  }
}
