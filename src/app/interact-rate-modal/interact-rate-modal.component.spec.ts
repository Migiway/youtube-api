import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractRateModalComponent } from './interact-rate-modal.component';

describe('InteractRateModalComponent', () => {
  let component: InteractRateModalComponent;
  let fixture: ComponentFixture<InteractRateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractRateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractRateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
