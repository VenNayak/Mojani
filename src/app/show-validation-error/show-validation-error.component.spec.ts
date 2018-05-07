import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowValidationErrorComponent } from './show-validation-error.component';

describe('ShowValidationErrorComponent', () => {
  let component: ShowValidationErrorComponent;
  let fixture: ComponentFixture<ShowValidationErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowValidationErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowValidationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
