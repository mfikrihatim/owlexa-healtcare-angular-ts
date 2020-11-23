import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInformationComponent } from './navbar-information.component';

describe('NavbarInformationComponent', () => {
  let component: NavbarInformationComponent;
  let fixture: ComponentFixture<NavbarInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
