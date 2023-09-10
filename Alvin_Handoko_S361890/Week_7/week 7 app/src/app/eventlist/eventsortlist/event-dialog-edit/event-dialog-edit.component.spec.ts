import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDialogEditComponent } from './event-dialog-edit.component';

describe('EventDialogEditComponent', () => {
  let component: EventDialogEditComponent;
  let fixture: ComponentFixture<EventDialogEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventDialogEditComponent]
    });
    fixture = TestBed.createComponent(EventDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
