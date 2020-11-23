import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSemiManagedCareComponent } from './o-semi-managed-care.component';

describe('OSemiManagedCareComponent', () => {
  let component: OSemiManagedCareComponent;
  let fixture: ComponentFixture<OSemiManagedCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OSemiManagedCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSemiManagedCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
