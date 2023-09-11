import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDialogDeleteComponent } from './event-dialog-delete.component';

describe('EventDialogDeleteComponent', () => {
  let component: EventDialogDeleteComponent;
  let fixture: ComponentFixture<EventDialogDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventDialogDeleteComponent]
    });
    fixture = TestBed.createComponent(EventDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
