import { TestBed } from '@angular/core/testing';

import { EventserviceService } from './eventservice.service';

describe('CampusserviceService', () => {
  let service: EventserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
