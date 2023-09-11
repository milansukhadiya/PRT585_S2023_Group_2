import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../event';

@Injectable({
  providedIn: 'root',
})
export class EventserviceService {
  [x: string]: any;
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<Event[]>('https://localhost:7246/api/Event', {
      withCredentials: true,
    });
  }
  postEvent(eventList: Event) {
    return this.http.post('https://localhost:7246/api/Event', eventList, {
      withCredentials: true,
    });
  }
  putEvent(eventList: Event) {
    return this.http.put(
      'https://localhost:7246/api/Event/update',
    eventList,
      { withCredentials: true }
    );
  }
  deleteEvent(EventId: number) {
    return this.http.delete('https://localhost:7246/api/Event/' + EventId, {
      withCredentials: true,
    });
  }
}
