import { TestBed } from '@angular/core/testing';

import { YoutubeDescriptionsLoggedInService } from './youtube-descriptions-logged-in.service';

describe('YoutubeDescriptionsLoggedInService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeDescriptionsLoggedInService = TestBed.get(YoutubeDescriptionsLoggedInService);
    expect(service).toBeTruthy();
  });
});
