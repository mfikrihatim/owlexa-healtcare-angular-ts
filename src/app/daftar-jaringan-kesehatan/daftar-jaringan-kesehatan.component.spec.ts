import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarJaringanKesehatanComponent } from './daftar-jaringan-kesehatan.component';

describe('DaftarJaringanKesehatanComponent', () => {
  let component: DaftarJaringanKesehatanComponent;
  let fixture: ComponentFixture<DaftarJaringanKesehatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarJaringanKesehatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarJaringanKesehatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
