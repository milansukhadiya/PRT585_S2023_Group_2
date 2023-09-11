import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentinputComponent } from './studentinput.component';

describe('StudentinputComponent', () => {
  let component: StudentinputComponent;
  let fixture: ComponentFixture<StudentinputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentinputComponent]
    });
    fixture = TestBed.createComponent(StudentinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
