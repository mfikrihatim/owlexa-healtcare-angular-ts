import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveiOnlineMemberComponent } from './survei-online-member.component';

describe('SurveiOnlineMemberComponent', () => {
  let component: SurveiOnlineMemberComponent;
  let fixture: ComponentFixture<SurveiOnlineMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveiOnlineMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveiOnlineMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
