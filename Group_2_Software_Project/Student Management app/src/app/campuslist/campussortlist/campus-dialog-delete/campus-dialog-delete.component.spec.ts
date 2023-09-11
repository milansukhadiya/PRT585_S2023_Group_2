import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusDialogDeleteComponent } from './campus-dialog-delete.component';

describe('CampusDialogDeleteComponent', () => {
  let component: CampusDialogDeleteComponent;
  let fixture: ComponentFixture<CampusDialogDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampusDialogDeleteComponent]
    });
    fixture = TestBed.createComponent(CampusDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
