import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LintasartaComponent } from './lintasarta.component';

describe('LintasartaComponent', () => {
  let component: LintasartaComponent;
  let fixture: ComponentFixture<LintasartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LintasartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LintasartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
