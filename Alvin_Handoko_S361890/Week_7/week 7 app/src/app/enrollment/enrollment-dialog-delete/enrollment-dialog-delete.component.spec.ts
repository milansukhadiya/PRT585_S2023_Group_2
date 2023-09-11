import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentDialogDeleteComponent } from './enrollment-dialog-delete.component';

describe('EnrollmentDialogDeleteComponent', () => {
  let component: EnrollmentDialogDeleteComponent;
  let fixture: ComponentFixture<EnrollmentDialogDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentDialogDeleteComponent]
    });
    fixture = TestBed.createComponent(EnrollmentDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
