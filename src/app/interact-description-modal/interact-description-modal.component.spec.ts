import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractDescriptionModalComponent } from './interact-description-modal.component';

describe('InteractDescriptionModalComponent', () => {
  let component: InteractDescriptionModalComponent;
  let fixture: ComponentFixture<InteractDescriptionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractDescriptionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractDescriptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
