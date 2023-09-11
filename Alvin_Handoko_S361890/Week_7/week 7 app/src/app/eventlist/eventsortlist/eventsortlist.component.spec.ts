import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsortlistComponent } from './eventsortlist.component';

describe('EventsortlistComponent', () => {
  let component: EventsortlistComponent;
  let fixture: ComponentFixture<EventsortlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsortlistComponent]
    });
    fixture = TestBed.createComponent(EventsortlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
