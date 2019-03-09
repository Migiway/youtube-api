import { TestBed } from '@angular/core/testing';

import { PlaylistContentService } from './playlist-content.service';

describe('PlaylistContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaylistContentService = TestBed.get(PlaylistContentService);
    expect(service).toBeTruthy();
  });
});