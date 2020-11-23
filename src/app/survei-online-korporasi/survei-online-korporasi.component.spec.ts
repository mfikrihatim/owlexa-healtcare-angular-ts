import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveiOnlineKorporasiComponent } from './survei-online-korporasi.component';

describe('SurveiOnlineKorporasiComponent', () => {
  let component: SurveiOnlineKorporasiComponent;
  let fixture: ComponentFixture<SurveiOnlineKorporasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveiOnlineKorporasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveiOnlineKorporasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
