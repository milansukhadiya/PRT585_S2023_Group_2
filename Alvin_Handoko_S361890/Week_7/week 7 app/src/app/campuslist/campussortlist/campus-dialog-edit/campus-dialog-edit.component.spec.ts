import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusDialogEditComponent } from './campus-dialog-edit.component';

describe('CampusDialogEditComponent', () => {
  let component: CampusDialogEditComponent;
  let fixture: ComponentFixture<CampusDialogEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampusDialogEditComponent]
    });
    fixture = TestBed.createComponent(CampusDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
