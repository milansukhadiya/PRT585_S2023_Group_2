import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentDialogAddComponent } from './enrollment-dialog-add.component';

describe('EnrollmentDialogAddComponent', () => {
  let component: EnrollmentDialogAddComponent;
  let fixture: ComponentFixture<EnrollmentDialogAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentDialogAddComponent]
    });
    fixture = TestBed.createComponent(EnrollmentDialogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
