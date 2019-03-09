import { TestBed } from '@angular/core/testing';

import { SportContentServiceService } from './sport-content.service';

describe('SportContentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportContentServiceService = TestBed.get(SportContentServiceService);
    expect(service).toBeTruthy();
  });
});
