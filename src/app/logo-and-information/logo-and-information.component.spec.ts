import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAndInformationComponent } from './logo-and-information.component';

describe('LogoAndInformationComponent', () => {
  let component: LogoAndInformationComponent;
  let fixture: ComponentFixture<LogoAndInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoAndInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoAndInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
