import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampussortlistComponent } from './campussortlist.component';

describe('CampussortlistComponent', () => {
  let component: CampussortlistComponent;
  let fixture: ComponentFixture<CampussortlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampussortlistComponent]
    });
    fixture = TestBed.createComponent(CampussortlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
