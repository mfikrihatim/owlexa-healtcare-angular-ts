import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OFrontEndTechnologyServiceComponent } from './o-front-end-technology-service.component';

describe('OFrontEndTechnologyServiceComponent', () => {
  let component: OFrontEndTechnologyServiceComponent;
  let fixture: ComponentFixture<OFrontEndTechnologyServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OFrontEndTechnologyServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OFrontEndTechnologyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
