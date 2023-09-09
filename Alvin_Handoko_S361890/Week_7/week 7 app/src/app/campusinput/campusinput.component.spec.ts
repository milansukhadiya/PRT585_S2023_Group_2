import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusinputComponent } from './campusinput.component';

describe('CampusinputComponent', () => {
  let component: CampusinputComponent;
  let fixture: ComponentFixture<CampusinputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampusinputComponent]
    });
    fixture = TestBed.createComponent(CampusinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
