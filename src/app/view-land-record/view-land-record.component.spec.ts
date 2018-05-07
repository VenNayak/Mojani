import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlandrecordComponent } from './view-land-record.component';

describe('ViewlandrecordComponent', () => {
  let component: ViewlandrecordComponent;
  let fixture: ComponentFixture<ViewlandrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlandrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlandrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
