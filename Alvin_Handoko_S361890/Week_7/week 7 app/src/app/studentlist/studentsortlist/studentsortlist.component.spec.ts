import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsortlistComponent } from './studentsortlist.component';

describe('StudentsortlistComponent', () => {
  let component: StudentsortlistComponent;
  let fixture: ComponentFixture<StudentsortlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsortlistComponent]
    });
    fixture = TestBed.createComponent(StudentsortlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
