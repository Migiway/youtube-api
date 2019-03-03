import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractPlaylistModalComponent } from './interact-playlist-modal.component';

describe('InteractPlaylistModalComponent', () => {
  let component: InteractPlaylistModalComponent;
  let fixture: ComponentFixture<InteractPlaylistModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractPlaylistModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractPlaylistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
