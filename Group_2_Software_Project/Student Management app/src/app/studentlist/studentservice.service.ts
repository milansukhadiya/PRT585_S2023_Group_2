import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root',
})
export class StudentserviceService {
  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<Student[]>('https://localhost:7246/api/Student', {
      withCredentials: true,
    });
  }
  postStudent(studentList: Student) {
    return this.http.post('https://localhost:7246/api/Student', studentList, {
      withCredentials: true,
    });
  }
  putStudent(studentList: Student) {
    return this.http.put(
      'https://localhost:7246/api/Student/update',
    studentList,
      { withCredentials: true }
    );
  }
  deleteStudent(StudentId: number) {
    return this.http.delete('https://localhost:7246/api/Student/' + StudentId, {
      withCredentials: true,
    });
  }
}
