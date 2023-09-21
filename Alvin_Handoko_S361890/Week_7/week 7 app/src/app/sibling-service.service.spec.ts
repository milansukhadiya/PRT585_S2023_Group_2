import { TestBed } from '@angular/core/testing';

import { SiblingServiceService } from './sibling-service.service';

describe('SiblingServiceService', () => {
  let service: SiblingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiblingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
