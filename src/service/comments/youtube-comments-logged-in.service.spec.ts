import { TestBed } from '@angular/core/testing';

import { YoutubeCommentsLoggedInService } from './youtube-comments-logged-in.service';

describe('YoutubeCommentsLoggedInService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeCommentsLoggedInService = TestBed.get(YoutubeCommentsLoggedInService);
    expect(service).toBeTruthy();
  });
});
