import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlienBerhargaComponent } from './klien-berharga.component';

describe('KlienBerhargaComponent', () => {
  let component: KlienBerhargaComponent;
  let fixture: ComponentFixture<KlienBerhargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlienBerhargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlienBerhargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
