import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDialogDeleteComponent } from './student-dialog-delete.component';

describe('StudentDialogDeleteComponent', () => {
  let component: StudentDialogDeleteComponent;
  let fixture: ComponentFixture<StudentDialogDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDialogDeleteComponent]
    });
    fixture = TestBed.createComponent(StudentDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
