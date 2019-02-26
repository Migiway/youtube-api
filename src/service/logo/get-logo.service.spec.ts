import { TestBed } from '@angular/core/testing';

import { GetLogoService } from './get-logo.service';

describe('GetLogoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetLogoService = TestBed.get(GetLogoService);
    expect(service).toBeTruthy();
  });
});
