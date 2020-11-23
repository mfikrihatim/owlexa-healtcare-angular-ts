import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveiOnlineProviderComponent } from './survei-online-provider.component';

describe('SurveiOnlineProviderComponent', () => {
  let component: SurveiOnlineProviderComponent;
  let fixture: ComponentFixture<SurveiOnlineProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveiOnlineProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveiOnlineProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
