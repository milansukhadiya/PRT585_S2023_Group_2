import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventinputComponent } from './eventinput.component';

describe('EventinputComponent', () => {
  let component: EventinputComponent;
  let fixture: ComponentFixture<EventinputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventinputComponent]
    });
    fixture = TestBed.createComponent(EventinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
