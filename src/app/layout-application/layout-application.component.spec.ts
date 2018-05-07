import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApplicationComponent } from './layout-application.component';

describe('LayoutApplicationComponent', () => {
  let component: LayoutApplicationComponent;
  let fixture: ComponentFixture<LayoutApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
