import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnrollmentList, EnrollmentString } from '../enrollment';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  constructor(private http: HttpClient) {}

  getEnrollments() {
    return this.http.get<EnrollmentString[]>('https://localhost:7246/api/Enrollment', {
      withCredentials: true,
    });
  }
  postEnrollment(enrollmentList: EnrollmentString) {
    return this.http.post('https://localhost:7246/api/Unit', enrollmentList, {
      withCredentials: true,
    });
  }
  putEnrollment(enrollmentList: EnrollmentString) {
    return this.http.put('https://localhost:7246/api/Unit/update', enrollmentList, {
      withCredentials: true,
    });
  }
  deleteEnrollment(EnrollmentId: number) {
    return this.http.delete('https://localhost:7246/api/Unit/' + EnrollmentId, {
      withCredentials: true,
    });
  }
}
