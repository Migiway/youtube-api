import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractCommentModalComponent } from './interact-comment-modal.component';

describe('InteractCommentModalComponent', () => {
  let component: InteractCommentModalComponent;
  let fixture: ComponentFixture<InteractCommentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractCommentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractCommentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
