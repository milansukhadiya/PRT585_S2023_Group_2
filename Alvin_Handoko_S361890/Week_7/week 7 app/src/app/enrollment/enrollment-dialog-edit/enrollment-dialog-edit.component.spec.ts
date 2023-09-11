import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentDialogEditComponent } from './enrollment-dialog-edit.component';

describe('EnrollmentDialogEditComponent', () => {
  let component: EnrollmentDialogEditComponent;
  let fixture: ComponentFixture<EnrollmentDialogEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentDialogEditComponent]
    });
    fixture = TestBed.createComponent(EnrollmentDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
