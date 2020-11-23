import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OThirdPartyAdministratorComponent } from './o-third-party-administrator.component';

describe('OThirdPartyAdministratorComponent', () => {
  let component: OThirdPartyAdministratorComponent;
  let fixture: ComponentFixture<OThirdPartyAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OThirdPartyAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OThirdPartyAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
