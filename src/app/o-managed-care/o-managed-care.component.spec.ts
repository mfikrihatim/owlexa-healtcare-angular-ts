import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OManagedCareComponent } from './o-managed-care.component';

describe('OManagedCareComponent', () => {
  let component: OManagedCareComponent;
  let fixture: ComponentFixture<OManagedCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OManagedCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OManagedCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
