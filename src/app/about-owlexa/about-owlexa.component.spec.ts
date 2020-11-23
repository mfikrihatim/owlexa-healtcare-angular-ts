import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOwlexaComponent } from './about-owlexa.component';

describe('AboutOwlexaComponent', () => {
  let component: AboutOwlexaComponent;
  let fixture: ComponentFixture<AboutOwlexaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOwlexaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOwlexaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
