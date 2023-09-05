import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDialogEditComponent } from './student-dialog-edit.component';

describe('StudentDialogEditComponent', () => {
  let component: StudentDialogEditComponent;
  let fixture: ComponentFixture<StudentDialogEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDialogEditComponent]
    });
    fixture = TestBed.createComponent(StudentDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
