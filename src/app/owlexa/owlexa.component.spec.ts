import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlexaComponent } from './owlexa.component';

describe('OwlexaComponent', () => {
  let component: OwlexaComponent;
  let fixture: ComponentFixture<OwlexaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwlexaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlexaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
