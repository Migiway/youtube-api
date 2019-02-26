import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLogoComponent } from './get-logo.component';

describe('GetLogoComponent', () => {
  let component: GetLogoComponent;
  let fixture: ComponentFixture<GetLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
