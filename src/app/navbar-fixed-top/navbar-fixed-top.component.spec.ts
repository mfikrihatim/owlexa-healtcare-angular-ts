import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFixedTopComponent } from './navbar-fixed-top.component';

describe('NavbarFixedTopComponent', () => {
  let component: NavbarFixedTopComponent;
  let fixture: ComponentFixture<NavbarFixedTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarFixedTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFixedTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
