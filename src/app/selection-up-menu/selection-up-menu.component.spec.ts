import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionUpMenuComponent } from './selection-up-menu.component';

describe('SelectionUpMenuComponent', () => {
  let component: SelectionUpMenuComponent;
  let fixture: ComponentFixture<SelectionUpMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionUpMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionUpMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
