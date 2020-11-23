import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranProviderBaruComponent } from './pendaftaran-provider-baru.component';

describe('PendaftaranProviderBaruComponent', () => {
  let component: PendaftaranProviderBaruComponent;
  let fixture: ComponentFixture<PendaftaranProviderBaruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftaranProviderBaruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendaftaranProviderBaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
