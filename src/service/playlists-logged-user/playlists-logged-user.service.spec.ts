import { TestBed } from '@angular/core/testing';

import { PlaylistsLoggedUserService } from './playlists-logged-user.service';

describe('PlaylistsLoggedUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaylistsLoggedUserService = TestBed.get(PlaylistsLoggedUserService);
    expect(service).toBeTruthy();
  });
});
