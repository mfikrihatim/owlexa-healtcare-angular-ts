import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OOptimasiBpjsComponent } from './o-optimasi-bpjs.component';

describe('OOptimasiBpjsComponent', () => {
  let component: OOptimasiBpjsComponent;
  let fixture: ComponentFixture<OOptimasiBpjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OOptimasiBpjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OOptimasiBpjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
