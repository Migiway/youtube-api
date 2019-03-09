import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsLoggedUserComponent } from './playlists-logged-user.component';

describe('PlaylistsLoggedUserComponent', () => {
  let component: PlaylistsLoggedUserComponent;
  let fixture: ComponentFixture<PlaylistsLoggedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistsLoggedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsLoggedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
