import { TestBed } from '@angular/core/testing';

import { MusiqueContentService } from './musique-content.service';

describe('MusiqueContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusiqueContentService = TestBed.get(MusiqueContentService);
    expect(service).toBeTruthy();
  });
});
