import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportContentComponent } from './sport-content.component';

describe('SportContentComponent', () => {
  let component: SportContentComponent;
  let fixture: ComponentFixture<SportContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
