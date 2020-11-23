import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonsultasiDokterComponent } from './konsultasi-dokter.component';

describe('KonsultasiDokterComponent', () => {
  let component: KonsultasiDokterComponent;
  let fixture: ComponentFixture<KonsultasiDokterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonsultasiDokterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonsultasiDokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
