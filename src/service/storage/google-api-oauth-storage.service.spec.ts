import { TestBed } from '@angular/core/testing';

import { GoogleApiOauthStorageService } from './google-api-oauth-storage.service';

describe('GoogleApiOauthStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleApiOauthStorageService = TestBed.get(GoogleApiOauthStorageService);
    expect(service).toBeTruthy();
  });
});
