import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OCorporateHealthComponent } from './o-corporate-health.component';

describe('OCorporateHealthComponent', () => {
  let component: OCorporateHealthComponent;
  let fixture: ComponentFixture<OCorporateHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OCorporateHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OCorporateHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
