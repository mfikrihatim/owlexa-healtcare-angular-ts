import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayananPendukungComponent } from './layanan-pendukung.component';

describe('LayananPendukungComponent', () => {
  let component: LayananPendukungComponent;
  let fixture: ComponentFixture<LayananPendukungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayananPendukungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayananPendukungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
