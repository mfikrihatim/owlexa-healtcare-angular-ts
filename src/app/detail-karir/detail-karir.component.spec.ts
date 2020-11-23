import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKarirComponent } from './detail-karir.component';

describe('DetailKarirComponent', () => {
  let component: DetailKarirComponent;
  let fixture: ComponentFixture<DetailKarirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailKarirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailKarirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
