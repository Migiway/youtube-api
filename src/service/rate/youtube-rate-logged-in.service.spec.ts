import { TestBed } from '@angular/core/testing';

import { YoutubeRateLoggedInService } from './youtube-rate-logged-in.service';

describe('YoutubeRateLoggedInService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeRateLoggedInService = TestBed.get(YoutubeRateLoggedInService);
    expect(service).toBeTruthy();
  });
});
