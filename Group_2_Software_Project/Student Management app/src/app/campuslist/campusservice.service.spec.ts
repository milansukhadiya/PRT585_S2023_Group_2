import { TestBed } from '@angular/core/testing';

import { CampusserviceService } from './campusservice.service';

describe('CampusserviceService', () => {
  let service: CampusserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampusserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
