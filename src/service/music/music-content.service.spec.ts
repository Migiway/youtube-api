import { TestBed } from '@angular/core/testing';

import { MusicContentService } from './music-content.service';

describe('MusicContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicContentService = TestBed.get(MusicContentService);
    expect(service).toBeTruthy();
  });
});
